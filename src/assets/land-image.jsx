import React, { useEffect, useState } from 'react';
import imageData from './json/continueFilm.json';

const Test = () => {
    useEffect(() => {
      imageData.map(item => {
        const src = item.image;
        const title = item.title;
        const rating = item.rating;
        console.log(`${src} | ${title} | ${rating}`);
      });
    }, []); // empty dependency array so it runs once
}
export default Test 