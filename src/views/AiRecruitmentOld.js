import React, { useEffect } from 'react';
const AiRecruitment = () => {  window.location.replace("https://www.academicjobs.com/about");
    useEffect(() => {
        const setIframeFullScreen = () => {  window.location.replace("https://www.academicjobs.com/ai-recruitment");
            const iframe = document.getElementById('fullscreen-iframe');
            if (iframe) {
                iframe.style.width = '100%';
                iframe.style.height = '100vh';
            }
        };
        window.addEventListener('resize', setIframeFullScreen);
        setIframeFullScreen();
        return () => {
            window.removeEventListener('resize', setIframeFullScreen);
        };
    }, []);
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                id="fullscreen-iframe"
                title="Full Screen Iframe"
                src="https://academicjobs.s3.amazonaws.com/html/ai-recruitment/index.html"
                frameBorder="0"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
    );
};
export default AiRecruitment;
