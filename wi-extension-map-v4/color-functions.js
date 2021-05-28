// returns the selected path color
const colorFiller = (d, metric) => {
    let countyColorScale = countyColorScaler(metric)
    let tractColorScale = tractColorScaler(metric)
    d3.selectAll('.county')
        .style('fill', (d) => {
            if (d.properties[metric]) {
                return countyColorScale(d.properties[metric]) 
            } else {
                return "#c9ddff";
            }
        })
    d3.selectAll('.tract')
        .style('fill', (d) => {
            if (d.properties[metric]) {
                return tractColorScale(d.properties[metric]) 
            } else {
                return "#c9ddff";
            }
        })
}

// matches up the selection with the colorScale range and domain
const countyColorScaler = metric => {
    let scaleValue = d3.scaleQuantize()
        .range(countyColorScaleData[metric].range)
        .domain(countyColorScaleData[metric].domain)
    return scaleValue
}

const tractColorScaler = metric => {
    let scaleValue = d3.scaleQuantize()
        .range(tractColorScaleData[metric].range)
        .domain(tractColorScaleData[metric].domain)
    return scaleValue
}

// !! scales don't use the maxes and mins of dataset to compensate for outliers to get more
const countyColorScaleData = {
    belowPovTotal: {
        range: ["#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20"],
        domain: [0, 50000]
    },
    householdMedianIncome: {
        range: ["#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20"],
        domain: [40000, 75000]
    },
    unemploymentOver16Perc: {
        range: ["#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20"],
        domain: [0, 7]
    },
    uninsuredTotal: {
        range: ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
        domain: [0, 750]
    },
    mobileHomeTotal: {
        range: ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
        domain: [0, 4000]
    },
    kitchenAccessPerc: {
        range: ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
        domain: [92, 100]
    },
    noVehicleTotal: {
        range: ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
        domain: [0, 5000]
    },
    popUnder18Total: {
        range: ["#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92"],
        domain: [500, 20000]
    },
    popUnder18Perc: {
        range: ["#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92"],
        domain: [15, 30]
    },
    popOver65Total: {
        range: ["#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92"],
        domain: [0, 50000]
    },
    popWithDisTotal: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 50000]
    },
    popWithDisPerc: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [8, 20]
    },
    popCorrectionalTotal: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 4000]
    },
    popJuvDetTotal: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 250]
    },
    popNursingHomeTotal: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 2000]
    },
    popCollegeHousingTotal: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 5000]
    },
    over25HSDiplomaPerc: {
        range: ["#fce4ec", "#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f"],
        domain: [15, 50]
    },
    langEngLessThanWellPerc: {
        range: ["#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064"],
        domain: [0, 5]
    }
}

const tractColorScaleData = { 
    belowPovTotal: {
        range: ["#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20"],
        domain: [0, 3000]
    },
    unemploymentOver16Perc: {
        range: ["#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20"],
        domain: [0, 25]
    },
    householdMedianIncome: {
        range: ["#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20"],
        domain: [40000, 80000]
    },
    uninsuredTotal: {
        range: ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
        domain: [0, 750]
    },
    mobileHomeTotal: {
        range: ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
        domain: [0, 500]
    },
    kitchenAccessPerc: {
        range: ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
        domain: [75, 100]
    },
    noVehicleTotal: {
        range: ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
        domain: [0, 500]
    },
    popUnder18Total: {
        range: ["#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92"],
        domain: [0, 2500]
    },
    popUnder18Perc: {
        range: ["#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92"],
        domain: [0, 35]
    },
    popOver65Total: {
        range: ["#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92"],
        domain: [0, 1500]
    },
    popWithDisTotal: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 1000]
    },
    popWithDisPerc: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 25]
    },
    popCorrectionalTotal: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 1200]
    },
    popJuvDetTotal: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 100]
    },
    popNursingHomeTotal: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 250]
    },
    popCollegeHousingTotal: {
        range: ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        domain: [0, 1500]
    },
    over25HSDiplomaPerc: {
        range: ["#fce4ec", "#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f"],
        domain: [0, 50]
    },
    langEngLessThanWellPerc: {
        range: ["#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064"],
        domain: [0, 25]
    }
}
