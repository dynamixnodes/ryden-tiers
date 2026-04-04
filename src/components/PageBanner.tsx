interface PageBannerProps {
  title: string;
  subtitle: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <div
      className="hidden sm:block w-full h-64 sm:h-80 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('https://i.postimg.cc/RCJkWYHV/bg-rydenbyte.png')" }}
    >
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, hsl(0 0% 4%), transparent)' }} />
    </div>
  );
};

export default PageBanner;
