import React, { lazy, Suspense } from 'react';
import BrandCarousel from './BrandCarousel';

const CarDetails = ({ details , companyFolder }) => {
  if (!details) {
    return <div>Details not available</div>;
  }

  const { selectedModel, selectedVariant, description, accessories } = details;

  // Dynamically import the component based on the selected variant
  const VariantComponent = lazy(() => {
    // Check if selectedVariant is available, otherwise use a default variant or display an error component
    if (selectedVariant) {
      // Replace spaces with underscores or use camelCase
    const variantModuleName = selectedVariant.replace(/\s+/g, '_');
    //   const companyFolder = 'TataPages'; 
    return import(`./${companyFolder}/${variantModuleName}`);
} else {
      return import('./Contact'); 
    }
  });

  return (
    <div>
      <h2>Select Companies</h2>
      <BrandCarousel/>
      <h3>{selectedVariant}</h3>
      <p>{description}</p>

      {/* Use Suspense to handle the loading of the dynamic component */}
      <Suspense fallback={<div>Loading...</div>}>
        <VariantComponent accessories={accessories} />
      </Suspense>
    </div>
  );
};

export default CarDetails;
