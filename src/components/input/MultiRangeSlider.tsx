import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

type MultiSlideParams = {
  onInput?: (e: ChangeResult) => void,
  minValue?: number,
  maxValue?: number,
  min?: number,
  max?: number,
  minCaption?: string,
  maxCaption?: string,
  minLabel?: string,
  maxLabel?: string,
}

function MultiSlider({ onInput, min = 0, max = 100, minValue = 0, maxValue = 100, minCaption, maxCaption, minLabel, maxLabel }: MultiSlideParams) {
  // TODO: create own range slider, this one is not easily stylable
  if (!minLabel) {
    minLabel = min.toString();
  }
  if (!maxLabel) {
    maxLabel = max.toString();
  }

  return (
    <MultiRangeSlider min={min}
                      max={max}
                      step={1}
                      minValue={minValue}
                      maxValue={maxValue}
                      onInput={onInput}
                      ruler={false}
                      labels={[minLabel, maxLabel]}
                      minCaption={minCaption} 
                      maxCaption={maxCaption}
                      style={{border: 0, boxShadow: "none"}} />
  );
}

export default MultiSlider;
