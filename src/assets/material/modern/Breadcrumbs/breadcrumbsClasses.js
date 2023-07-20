import { unstable_generateUtilityClasses as generateUtilityClasses } from '@mui/utils';
import generateUtilityClass from '../generateUtilityClass';
export function getBreadcrumbsUtilityClass(slot) {
  return generateUtilityClass('MuiBreadcrumbs', slot);
}
const breadcrumbsClasses = generateUtilityClasses('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']);
export default breadcrumbsClasses;