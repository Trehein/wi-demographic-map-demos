const countyDataBinder = (counties, countyData) => {
    let boundCountyData = counties

    for(let i = 0; i < counties.features.length; i++) {
        let mapData = countyData[i].goeID // Misspelled! Watch out!
        // metrics
        let belowPovTotal = parseFloat(countyData[i].belowPovTotal)
        let householdMedianIncome = parseFloat(countyData[i].householdMedianIncome)
        let kitchenAccessPerc = parseFloat(countyData[i].kitchenAccessPerc)
        let langEngLessThanWellPerc = parseFloat(countyData[i].langEngLessThanWellPerc)
        let mobileHomeTotal = parseFloat(countyData[i].mobileHomeTotal)
        let noVehiclePerc = parseFloat(countyData[i].noVehiclePerc)
        let noVehicleTotal = parseFloat(countyData[i].noVehicleTotal)
        let over25HSDiplomaPerc = parseFloat(countyData[i].over25HSDiplomaPerc)
        let popCollegeHousingTotal = parseFloat(countyData[i].popCollegeHousingTotal)
        let popCorrectionalTotal = parseFloat(countyData[i].popCorrectionalTotal)
        let popJuvDetTotal = parseFloat(countyData[i].popJuvDetTotal)
        let popNursingHomeTotal = parseFloat(countyData[i].popNursingHomeTotal)
        let popOver65Perc = parseFloat(countyData[i].popOver65Perc)
        let popOver65Total = parseFloat(countyData[i].popOver65Total)
        let popUnder18Perc = parseFloat(countyData[i].popUnder18Perc)
        let popUnder18Total = parseFloat(countyData[i].popUnder18Total)
        let popWithDisPerc = parseFloat(countyData[i].popWithDisPerc)
        let popWithDisTotal = parseFloat(countyData[i].popWithDisTotal)
        let unemploymentOver16Perc = parseFloat(countyData[i].unemploymentOver16Perc)
        // bind the metric data to features.properties
        for (let j = 0; j < counties.features.length; j++) {
            let jsonCounty = boundCountyData.features[j].properties.AFFGEOID
            if (mapData === jsonCounty) {
                boundCountyData.features[j].properties.belowPovTotal = belowPovTotal;
                boundCountyData.features[j].properties.householdMedianIncome = householdMedianIncome;
                boundCountyData.features[j].properties.kitchenAccessPerc = kitchenAccessPerc;
                boundCountyData.features[j].properties.langEngLessThanWellPerc = langEngLessThanWellPerc;
                boundCountyData.features[j].properties.mobileHomeTotal = mobileHomeTotal;
                boundCountyData.features[j].properties.noVehiclePerc = noVehiclePerc;
                boundCountyData.features[j].properties.noVehicleTotal = noVehicleTotal;
                boundCountyData.features[j].properties.over25HSDiplomaPerc = over25HSDiplomaPerc;
                boundCountyData.features[j].properties.popCollegeHousingTotal = popCollegeHousingTotal;
                boundCountyData.features[j].properties.popCorrectionalTotal = popCorrectionalTotal;
                boundCountyData.features[j].properties.popJuvDetTotal = popJuvDetTotal;
                boundCountyData.features[j].properties.popNursingHomeTotal = popNursingHomeTotal;
                boundCountyData.features[j].properties.popOver65Perc = popOver65Perc;
                boundCountyData.features[j].properties.popOver65Total = popOver65Total;
                boundCountyData.features[j].properties.popUnder18Perc = popUnder18Perc;
                boundCountyData.features[j].properties.popUnder18Total = popUnder18Total;
                boundCountyData.features[j].properties.popWithDisPerc = popWithDisPerc;
                boundCountyData.features[j].properties.popWithDisTotal = popWithDisTotal;
                boundCountyData.features[j].properties.unemploymentOver16Perc = unemploymentOver16Perc;
                
                break
            }
        }
    }
    return boundCountyData
}

const tractDataBinder = (tracts, wiTractsData) => {
    let boundTractData = tracts

    for(let i = 0; i < wiTractsData.length; i++) {
        let mapData = wiTractsData[i].geoID
        // metrics
        let belowPovTotal = parseFloat(wiTractsData[i].belowPovTotal)
        let householdMedianIncome = parseFloat(wiTractsData[i].householdMedianIncome)
        let kitchenAccessPerc = parseFloat(wiTractsData[i].kitchenAccessPerc)
        let langEngLessThanWellPerc = parseFloat(wiTractsData[i].langEngLessThanWellPerc)
        let mobileHomeTotal = parseFloat(wiTractsData[i].mobileHomeTotal)
        let noVehiclePerc = parseFloat(wiTractsData[i].noVehiclePerc)
        let noVehicleTotal = parseFloat(wiTractsData[i].noVehicleTotal)
        let over25HSDiplomaPerc = parseFloat(wiTractsData[i].over25HSDiplomaPerc)
        let popCollegeHousingTotal = parseFloat(wiTractsData[i].popCollegeHousingTotal)
        let popCorrectionalTotal = parseFloat(wiTractsData[i].popCorrectionalTotal)
        let popJuvDetTotal = parseFloat(wiTractsData[i].popJuvDetTotal)
        let popNursingHomeTotal = parseFloat(wiTractsData[i].popNursingHomeTotal)
        let popOver65Perc = parseFloat(wiTractsData[i].popOver65Perc)
        let popOver65Total = parseFloat(wiTractsData[i].popOver65Total)
        let popUnder18Perc = parseFloat(wiTractsData[i].popUnder18Perc)
        let popUnder18Total = parseFloat(wiTractsData[i].popUnder18Total)
        let popWithDisPerc = parseFloat(wiTractsData[i].popWithDisPerc)
        let popWithDisTotal = parseFloat(wiTractsData[i].popWithDisTotal)
        let unemploymentOver16Perc = parseFloat(wiTractsData[i].unemploymentOver16Perc)
        // bind the metric data to features.properties
        for (let j = 0; j < tracts.features.length; j++) {
            let jsonTract = boundTractData.features[j].properties.AFFGEOID
            if (mapData === jsonTract) {
                boundTractData.features[j].properties.belowPovTotal = belowPovTotal;
                boundTractData.features[j].properties.belowPovTotal = belowPovTotal;
                boundTractData.features[j].properties.kitchenAccessPerc = kitchenAccessPerc;
                boundTractData.features[j].properties.householdMedianIncome = householdMedianIncome;
                boundTractData.features[j].properties.langEngLessThanWellPerc = langEngLessThanWellPerc;
                boundTractData.features[j].properties.mobileHomeTotal = mobileHomeTotal;
                boundTractData.features[j].properties.noVehiclePerc = noVehiclePerc;
                boundTractData.features[j].properties.noVehicleTotal = noVehicleTotal;
                boundTractData.features[j].properties.over25HSDiplomaPerc = over25HSDiplomaPerc;
                boundTractData.features[j].properties.popCollegeHousingTotal = popCollegeHousingTotal;
                boundTractData.features[j].properties.popCorrectionalTotal = popCorrectionalTotal;
                boundTractData.features[j].properties.popJuvDetTotal = popJuvDetTotal;
                boundTractData.features[j].properties.popNursingHomeTotal = popNursingHomeTotal;
                boundTractData.features[j].properties.popOver65Perc = popOver65Perc;
                boundTractData.features[j].properties.popOver65Total = popOver65Total;
                boundTractData.features[j].properties.popUnder18Perc = popUnder18Perc;
                boundTractData.features[j].properties.popUnder18Total = popUnder18Total;
                boundTractData.features[j].properties.popWithDisPerc = popWithDisPerc;
                boundTractData.features[j].properties.popWithDisTotal = popWithDisTotal;
                boundTractData.features[j].properties.unemploymentOver16Perc = unemploymentOver16Perc;
                break
            }
        }
    }
    return boundTractData
}