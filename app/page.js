import Hero from "./Cx/Hero";
import VideoFeature from "./Cx/VideoFeature";
import GravityMotorSection from "./Cx/GravityMotorSection";
import MechanicalDiagramSection from "./Cx/MechanicalDiagramSection";
import ApplicationsSection from "./Cx/ApplicationsSection";
import ComponentShowcaseSection from "./Cx/ComponentShowcaseSection";
import CableAttachmentSection from "./Cx/CableAttachmentSection";
import PatentApplicationSection from "./Cx/PatentApplicationSection";
import EnergyGallerySection from "./Cx/EnergyGallerySection";
import OperatingPrincipleSection from "./Cx/OperatingPrincipleSection";
import Footer from "./Cx/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <PatentApplicationSection />
      <EnergyGallerySection />
      <VideoFeature />
      <GravityMotorSection />
      <MechanicalDiagramSection />
      <ApplicationsSection />
      <ComponentShowcaseSection />
      <CableAttachmentSection />
      <OperatingPrincipleSection />
      <Footer />
    </div>
  );
}
