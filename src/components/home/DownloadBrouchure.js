export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/FarmingLogo.png';
    link.download = 'FarmingLogo.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  