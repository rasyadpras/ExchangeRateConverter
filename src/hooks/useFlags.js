const useFlags = (flag) => {
    const flagUrl = `https://wise.com/web-art/assets/flags/${flag.toLowerCase()}.svg`;
    return { flagUrl };
};

export default useFlags;