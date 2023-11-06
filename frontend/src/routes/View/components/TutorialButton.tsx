import React, { useState, useEffect } from "react";
import "intro.js/introjs.css";
import { Steps } from "intro.js-react";
import { tourOptions, tourSteps } from "./Tutorial";
import {BsQuestionCircle} from "react-icons/bs"
import tw from "twin.macro";

const TutorialButton: React.FC = () => {
    const [stepsEnabled, setStepsEnabled] = useState(false);
    const [initialStep] = useState(0);
    const [tour] = useState({
        options: tourOptions,
        steps: tourSteps,
      });
    const onExit = () => {
        setStepsEnabled(false);
      };
    const handleHelp = () => {
        setStepsEnabled((prev) => !prev);
      };
    const ICON = BsQuestionCircle

    return(
        <div>
            <Steps
                enabled={stepsEnabled}
                steps={tour.steps}
                initialStep={initialStep}
                onExit={onExit}
                options={tour.options}
            />
        <ICON css={tw`text-black pl-3 pt-3`} onClick={handleHelp}></ICON>
        </div>
    )
}

export default TutorialButton;