import React, { useCallback, useState, Component, useLayoutEffect } from 'react';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export function MyImg({ image, project }) {
    const CustomZoomContent = ({
        buttonUnzoom, // default unzoom button
        modalState, // current state of the zoom modal: UNLOADED, LOADING, LOADED, UNLOADING
        img, // your image, prepped for zooming
        //onUnzoom,   // unused here, but a callback to manually unzoom the image and
        //   close the modal if you want to use your own buttons or
        //   listeners in your custom experience
    }) => {
        const [isLoaded, setIsLoaded] = useState(false);

        useLayoutEffect(() => {
            if (modalState === 'LOADED') {
                setIsLoaded(true);
            } else if (modalState === 'UNLOADING') {
                setIsLoaded(false);
            }
        }, [modalState]);

        const classCaption = isLoaded ? 'zoom-caption zoom-caption--loaded' : 'zoom-caption';

        return (
            <>
                {buttonUnzoom}

                <figure>{img}</figure>
                <div className="modal-text" style={{ backgroundColor: project.bgColor }}>
                    <h1 className="modal-title" style={{ color: project.textColor }}>
                        {project.title}
                    </h1>
                    <p className="modal-description" style={{ color: project.textColor }}>
                        {project.description}
                    </p>
                    {project.technologyUsed && (
                        <p className="modal-description" style={{ color: project.textColor }}>
                            Technologoy used: {project.technologyUsed}
                        </p>
                    )}
                </div>
            </>
        );
    };

    return (
        <Zoom ZoomContent={CustomZoomContent}>
            <img src={image} />
        </Zoom>
    );
}
