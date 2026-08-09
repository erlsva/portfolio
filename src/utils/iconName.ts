/**
 * Helper function to extract the name of an icon from Devicons.
 * @param icon
 * @returns returns the name of the icon
 */

export const iconName = (icon: string): string => {
  return icon.split("-")[1];
};
