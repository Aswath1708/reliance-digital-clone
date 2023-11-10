export const getDisclaimerText = () => {
  const currentYear = new Date().getFullYear();

  return {
    header: "Disclaimer",
    disclaimer:
      "Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.",
    copyrights: `© ${currentYear} Reliance Digital. All Rights Reserved.`,
  };
};
