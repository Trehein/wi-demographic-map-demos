async function drawMap() {
    // 1. Access Data
    const wiTracts = await d3.json("./wi-census-tracts.json")
    const wiCounties = await d3.json("./wi-counties.json")
    const pears2019data = await d3.csv("./pearsData2019v2.csv")

    const wiTractsData = await d3.csv("./wiCensusTractsData.csv") 
    const wiCountiesData = await d3.csv("./wiCensusCountiesData.csv")

    const countyData = countyDataBinder(wiCounties, wiCountiesData) // binds the Feature containing geometry with the dataset metrics by matching geoID
    const tractData = tractDataBinder(wiTracts, wiTractsData)

    console.log(countyData)
    console.log(tractData)

    // const metric = "popCollegeHousingTotal"
    // const metric = "popNursingHomeTotal"
    // const metric = "popJuvDetTotal"
    // const metric = "popCorrectionalTotal"
    // const metric = "noVehicleTotal"
    // const metric = "kitchenAccessPerc"
    // const metric = "mobileHomeTotal"
    // const metric = "langEngLessThanWellPerc"
    // const metric = "popWithDisPerc"
    // const metric = "popWithDisTotal"
    // const metric = "popOver65Total"
    // const metric = "popUnder18Perc"
    // const metric = "popUnder18Total"
    // const metric = "unemploymentOver16Perc"
    // const metric = "over25HSDiplomaPerc"
    const metric = "belowPovTotal"
    // const metric = "householdMedianIncome"

    var map; // init map that will contain the Leaflet functionality and layers

    map = L.map("map").setView([44.456924, -89.871002], 7); // init Leaflet map
    var tileLayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{
        attributtion: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });
    var svg;
    var transform = d3.geoTransform({point: projectPoint});
    var path = d3.geoPath().projection(transform);
    
    //add tile and svg canvas to map
    tileLayer.addTo(map);
        L.svg().addTo(map);

    //add paths to svg
    svg = d3.select("#map").select("svg");

    var tractPaths = svg.selectAll(".tract")
        .data(wiTracts.features)
        .enter().append("path")
        .attr('class', 'tract')
        .attr("d", path)
        .attr("fill-opacity", .55)
        .attr("stroke", "#fff")
        .attr("stroke-width", 1)
        .attr('fill', d => {
            colorFiller(d, metric)
        })

    // var countyPaths = svg.selectAll(".county")
    //     .data(wiCounties.features)
    //     .enter().append("path")
    //     .attr('class', "county")
    //     .attr("d", path)
    //     .attr("fill-opacity", .55)
    //     .attr("stroke", "black")
    //     .attr("stroke-width", 1)            
    //     .attr('fill', d => {
    //         colorFiller(d, metric)
    //     })

    const pears2019 = svg.selectAll("circle")
        .attr("class", "pears2019")
        .data(pears2019data)
        .join('circle')
            .attr('fill', 'orange')
            .attr('stroke', 'black')
            .attr('r', 5)
            .attr('cx', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).y)

    //update path after user done dragging or zooming
    map.on("zoomend", update);

    //for updating the paths
    function update(){
        tractPaths.attr("d", path);
        // countyPaths.attr("d", path);
        pears2019
            .attr('cx', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).y)
    }

    // for projecting the LatLng(s) to layerpoints on the leaflet map
    function projectPoint(x, y){
        var point = map.latLngToLayerPoint(new L.LatLng(y, x));
        this.stream.point(point.x, point.y);
    }

}

drawMap();


