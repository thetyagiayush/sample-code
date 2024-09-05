export default function formatPhoneNumber (value) {
    let cleaned = value.replace(/[^\d+]/g, '');

    if (!cleaned.startsWith('+')) {
        cleaned = '+1' + cleaned;
    } else if (cleaned.indexOf('+') !== 0) {
        cleaned = '+' + cleaned.replace(/\+/g, '');
    }

    if (cleaned.startsWith('+1')) {
        let formattedNumber = cleaned.substring(0, 2); // +1
        if (cleaned.length > 2) {
            formattedNumber += ' ' + cleaned.substring(2, 5); // 585
        }
        if (cleaned.length > 5) {
            formattedNumber += ' - ' + cleaned.substring(5, 8); // 656
        }
        if (cleaned.length > 8) {
            formattedNumber += ' - ' + cleaned.substring(8, 12); // 2454
        }
        return formattedNumber;
    }

    return cleaned;
};