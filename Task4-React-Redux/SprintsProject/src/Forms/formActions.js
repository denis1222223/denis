export const FILL_FORM = 'FILL_FORM';

export function fillForm(action, item) {
    return {
        type: FILL_FORM,
        payload: {action, item}
    };
}