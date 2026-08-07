import { useState } from "react";
import { Images } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import GalleryFilterTabs from "../components/ui/GalleryFilterTabs";
import BeforeAfterCard from "../components/ui/BeforeAfterCard";
import CTASection from "../components/sections/CTASection";
import { galleryCategories, galleryItems } from "../data/gallery";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.filterTags.includes(activeCategory));

  return (
    <>
      <Seo
        title="Gallery"
        description="Browse completed repair work from our workshop — servo motors, transformers, coil rewinding, CNC spindle repair, and our testing laboratory, with before and after comparisons."
      />

      <PageHero
        icon={Images}
        eyebrow="Our Work"
        title="Repair Gallery"
        description="A closer look at completed repair work from our workshop, balancing station, and testing laboratory."
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Browse by Category"
            title="Completed Repair Projects"
            description="Filter by equipment type or facility area to see relevant work."
          />

          <div className="mt-10">
            <GalleryFilterTabs categories={galleryCategories} active={activeCategory} onChange={setActiveCategory} />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <BeforeAfterCard key={item.title} item={item} delay={(index % 3) * 0.06} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="mt-12 text-center text-sm text-slate-500">No items in this category yet.</p>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}

export default Gallery;
