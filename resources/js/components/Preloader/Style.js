import Styled from "styled-components";

const PreloaderStyle = Styled.div`  
    height: 100dvh;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .ba-preloader__logo {
        height: 20px;
    }
       
    .loader {
        width: 120px;
        height: 12px;
        border-radius: 20px;
        border: 2px solid #006EFF;
        position: relative;
    }
    .loader::before {
        content: "";
        position: absolute;
        margin: 2px;
        inset: 0 100% 0 0;
        border-radius: inherit;
        background: linear-gradient(90deg, #0E0E0E, #E05F1B, #006EFF);
        animation: progress 2s infinite;
    }
        
    @keyframes progress {
        100% {inset:0}
    }

`;

export { PreloaderStyle };
