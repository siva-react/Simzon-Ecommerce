export const FormatAmount = (amount) => {
    return amount?.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const FormatCount = (count) => {
    return count?.toLocaleString('en-IN');
}