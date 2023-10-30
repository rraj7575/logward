import { AnimatePresence } from 'framer-motion';
import {
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Portal } from 'react-portal';

type OpenLayerFunction = (layer: Layer) => void;
type CloseLayerFunction = (layerId: string) => void;
type CloseAllLayersFunction = () => void;

export type LayerContextValue = {
  open: OpenLayerFunction;
  close: CloseLayerFunction;
  closeAllLayers: CloseAllLayersFunction;
};

const LayerContext = createContext<LayerContextValue>({
  open: () => {},
  close: () => {},
  closeAllLayers: () => {},
});

export type CurrentLayerContextValue = {
  layerId: string;
  close: () => void;
  isLast: boolean;
};

const CurrentLayerContext = createContext({
  layerId: '',
  close: () => {},
  isLast: false,
  closeAllLayers: () => {},
});

export type LayerProviderProps = {
  children: ReactNode;
};

export type Layer = {
  layer: ReactElement;
  layerId: string;
};

function isLayerAvailable({ layerId }: Layer, previousLayers: Layer[]) {
  return previousLayers.find(
    (existingLayer) => existingLayer.layerId === layerId
  );
}

export function LayerProvider({ children }: LayerProviderProps) {
  const [openLayers, setOpenLayers] = useState<Layer[]>([]);

  const open = useCallback((newLayer: Layer) => {
    setOpenLayers((previousLayers) => {
      if (isLayerAvailable(newLayer, previousLayers) !== null) {
        return [...previousLayers, newLayer];
      }

      return previousLayers;
    });
  }, []);

  const close = useCallback((layerId: string) => {
    setOpenLayers((previousLayers) => {
      return previousLayers.filter(
        (existingLayer) => existingLayer.layerId !== layerId
      );
    });
  }, []);

  const closeAllLayers = useCallback(() => {
    setOpenLayers([]);
  }, []);

  return (
    <LayerContext.Provider value={{ open, close, closeAllLayers }}>
      {children}
      <Portal>
        <AnimatePresence>
          {openLayers.map(({ layer, layerId }, index) => {
            return (
              <CurrentLayerContext.Provider
                key={layerId}
                value={{
                  layerId,
                  close: () => {
                    close(layerId);
                  },
                  closeAllLayers,
                  isLast: openLayers.length - 1 === index,
                }}
              >
                {cloneElement(layer, {
                  key: layerId,
                })}
              </CurrentLayerContext.Provider>
            );
          })}
        </AnimatePresence>
      </Portal>
    </LayerContext.Provider>
  );
}

export function useLayer(layer: ReactElement) {
  const layerId = useRef<string>('');
  const {
    open: openLayer,
    close: closeLayer,
    closeAllLayers,
  } = useContext(LayerContext);

  useEffect(() => {
    layerId.current = `Layer-${crypto.randomUUID()}`;
  }, []);

  const open = useCallback(() => {
    openLayer({ layer, layerId: layerId.current });
  }, []);

  const openWithProps = useCallback((additionalProps: Record<string, any>) => {
    openLayer({
      layer: cloneElement(layer, { ...additionalProps }),
      layerId: layerId.current,
    });
  }, []);

  return {
    open,
    openWithProps,
    close: closeLayer,
    closeAllLayers,
  };
}

export function useCurrentLayer() {
  return useContext(CurrentLayerContext);
}
