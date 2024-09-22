import React, { useState } from 'react';
import NextComp from './component/nextComp';
import FirstThree from './component/3first';
import Other from './component/other';
import Head from './component/head';

const PaginatedComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage(2);
  };

  const goToPreviousPage = () => {
    setCurrentPage(1);
  };

  return (
    <div className="p-4">
      <Head />

      {currentPage === 1 ? (
        <>
          <FirstThree />
          <Other />
        </>
      ) : (
        <NextComp />
      )}

      {/* Pagination Controls */}
      <div className="max-w-[1480px] mx-auto px-4 md:px-24 flex justify-end space-x-4">
        {currentPage === 2 && (
          <button
            onClick={goToPreviousPage}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
          >
            Previous Page
          </button>
        )}

        {currentPage === 1 && (
          <button
            onClick={goToNextPage}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginatedComponent;
