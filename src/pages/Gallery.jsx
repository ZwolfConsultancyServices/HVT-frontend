import React, { useState, useEffect } from 'react';
import styles from '../pagesCss/Gallery.module.css';

const images = [
    'images/g1.jpeg', 'images/g2.jpeg', 'images/g3.jpeg', 'images/g16.jpeg',
    'images/g5.jpeg', 'images/g10.jpeg', 'images/g14.jpeg', 'images/g8.jpeg',
    'images/g9.jpeg', 'images/g6.jpeg', 'images/g11.jpeg', 'images/g12.jpeg', 'images/g13.jpeg', 'images/g7.jpeg','images/g4.jpeg','images/g17.jpeg'
];

const Gallery = () => {
    const [visibleCards, setVisibleCards] = useState(6);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleViewMore = () => {
        setVisibleCards(images.length);
    };

    const updateMedia = () => {
        const isCurrentlyMobile = window.innerWidth <= 768;
        setIsMobile(isCurrentlyMobile);

        if (!isCurrentlyMobile) {
            setVisibleCards(images.length);
        } else {
            setVisibleCards(6);
        }       
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        updateMedia(); // Initial check

        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    return (
        <section className={`mt-5  bg-light ${styles.galleryContainer}`} >
            <h1 className='fw-bold fs-1 text-center pb-4'>Our <span className='text main-hover'>Gallery</span></h1>
            <div className={`${styles.imageGrid}`} data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                {images.slice(0, visibleCards).map((image, index) => (
                    <div key={index} className={styles.card}>
                        <img src={image} alt={`Gallery image ${index + 1}`} onError={() => console.error(`Failed to load image: ${image}`)} />
                    </div>
                ))}
            </div>
            {isMobile && visibleCards < images.length && (
                <div className={`text-center mt-3 ${styles.viewMoreButton}`}>
                    <button className="btn btn-primary" onClick={handleViewMore}>View More</button>
                </div>
            )}
        </section>
    );
};

export default Gallery;
