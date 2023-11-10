var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import _isEmpty from 'lodash/isEmpty';
import { useController } from 'react-hook-form';
import { TextInput } from 'ui';
import { Field } from '../Field';
export const TextField = (props) => {
    var _a;
    const { name, control, ref, rules, defaultValue, showError, heightFull = false, widthFull = false } = props, rest = __rest(props, ["name", "control", "ref", "rules", "defaultValue", "showError", "heightFull", "widthFull"]);
    const { field, fieldState } = useController({
        name,
        control,
        rules,
        defaultValue,
    });
    return (_jsx(Field, Object.assign({ fieldState: fieldState, showError: showError, heightFull: heightFull, widthFull: widthFull }, { children: _jsx(TextInput, Object.assign({ hasError: !_isEmpty((_a = fieldState.error) === null || _a === void 0 ? void 0 : _a.message) }, field, rest, { ref: ref, showError: showError })) })));
};
