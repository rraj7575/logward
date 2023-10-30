export function convertLabel(label: string, uppercase = true) {
  if ((label.startsWith('<<') && label.endsWith('>>')) || !uppercase) {
    return label.replace('<<', '{{.').replace('>>', '}}');
  }

  return label.toUpperCase();
}
