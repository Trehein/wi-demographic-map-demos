async function drawMap() {
    // 1. Access Data
    const wiTracts = await d3.json("./wi-census-tracts.json")
    const wiCounties = await d3.json("./wi-counties.json")
    const pears2019data = await d3.csv("./pearsData2019v2.csv")
    const pears2020data = await d3.csv("./pearsData2020v2.csv")

    const wiTractsData = await d3.csv("./wiCensusTractsData.csv") 
    const wiCountiesData = await d3.csv("./wiCensusCountiesData.csv")

    const wiAdultDayCare = await d3.csv("./wiAdultDayCare.csv")
    const wiChildCare = await d3.csv("./wiChildCare.csv")
    const wiFreeClinics = await d3.csv("./wiFreeClinics.csv")
    const wiNursingHomes = await d3.csv("./wiNursingHomes.csv")

    const countyData = countyDataBinder(wiCounties, wiCountiesData) // binds the Feature containing geometry with the dataset metrics by matching geoID
    const tractData = tractDataBinder(wiTracts, wiTractsData)

    // console.log(countyData)
    // console.log(tractData)
    console.log(wiAdultDayCare)

    let metric = "belowPovTotal"
    let geoValue = "counties"

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
        .attr("stroke", "black")
        .attr("stroke-opacity", .55)
        .attr("stroke-width", 1)
        .attr('fill', d => {
            colorFiller(d, metric)
        })
        .style('visibility', 'hidden')

    var countyPaths = svg.selectAll(".county")
        .data(wiCounties.features)
        .enter().append("path")
        .attr('class', "county")
        .attr("d", path)
        .attr("fill-opacity", .55)
        .attr("stroke", "black")
        .attr("stroke-opacity", .55)
        .attr("stroke-width", 1)            
        .attr('fill', d => {
            colorFiller(d, metric)
        })

    const pears2019 = svg.selectAll("circle")
        .attr("class", "pears2019")
        .data(pears2019data)
        .join('circle')
            .attr('fill', 'orange')
            .attr('stroke', 'black')
            .attr('r', 5)
            .attr('cx', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).y)

    const pears2020 = svg.selectAll("circle")
        .attr("class", "pears2019")
        .data(pears2020data)
        .join('circle')
            .attr('fill', 'yellow')
            .attr('stroke', 'black')
            .attr('r', 5)
            .attr('cx', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).y)

    const wiAdultDayCareCircles = svg.selectAll("wiAdultDayCareCircles")
        .attr("class", "wiAdultDayCareCircles")
        .data(wiAdultDayCare)
        .join('circle')
            .attr('fill', 'steelblue')
            .attr('stroke', 'black')
            .attr('r', 5)
            .attr('cx', d => map.latLngToLayerPoint([d.LAT, d.LON]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.LAT, d.LON]).y)

    const wiChildCareCircles = svg.selectAll("wiChildCareCircles")
        .attr("class", "wiChildCareCircles")
        .data(wiChildCare)
        .join('circle')
            .attr('fill', 'green')
            .attr('stroke', 'black')
            .attr('r', 5)
            .attr('cx', d => map.latLngToLayerPoint([d.LAT, d.LON]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.LAT, d.LON]).y)

    const wiFreeClinicsCircles = svg.selectAll("wiFreeClinicsCircles")
        .attr("class", "wiFreeClinicsCircles")
        .data(wiFreeClinics)
        .join('circle')
            .attr('fill', '#FF1493')
            .attr('stroke', 'black')
            .attr('r', 5)
            .attr('cx', d => map.latLngToLayerPoint([d.LAT, d.LON]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.LAT, d.LON]).y)

    const wiNursingHomesCircles = svg.selectAll("wiNursingHomesCircles")
        .attr("class", "wiNursingHomesCircles")
        .data(wiNursingHomes)
        .join('circle')
            .attr('fill', '#7FFF00')
            .attr('stroke', 'black')
            .attr('r', 5)
            .attr('cx', d => map.latLngToLayerPoint([d.LAT, d.LON]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.LAT, d.LON]).y)

    //update path after user done dragging or zooming
    map.on("zoomend", update);

    //for updating the paths
    function update(){
        tractPaths.attr("d", path);
        countyPaths.attr("d", path);

        pears2019
            .attr('cx', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).y)

        pears2020
            .attr('cx', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.site_latitude, d.site_longitude]).y)

        wiAdultDayCareCircles
            .attr('cx', d => map.latLngToLayerPoint([d.LAT, d.LON]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.LAT, d.LON]).y)

        wiChildCareCircles
            .attr('cx', d => map.latLngToLayerPoint([d.LAT, d.LON]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.LAT, d.LON]).y)

        wiFreeClinicsCircles
            .attr('cx', d => map.latLngToLayerPoint([d.LAT, d.LON]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.LAT, d.LON]).y)

        wiNursingHomesCircles
            .attr('cx', d => map.latLngToLayerPoint([d.LAT, d.LON]).x)
            .attr('cy', d => map.latLngToLayerPoint([d.LAT, d.LON]).y)
    }

    // for projecting the LatLng(s) to layerpoints on the leaflet map
    function projectPoint(x, y){
        var point = map.latLngToLayerPoint(new L.LatLng(y, x));
        this.stream.point(point.x, point.y);
    }

    // overlay data switcher
    d3.select("#overlayDrop")
    .on("change", d => {
        metric = d3.select("#overlayDrop").node().value
        svg.selectAll('.tract')
            .attr('fill', d => {
                colorFiller(d, metric)
            })
    })

    d3.select("#geoDrop")
    .on("change", d => {
        geoValue = d3.select("#geoDrop").node().value
        if(geoValue === "counties") {
            svg.selectAll('.tract')
                .style('visibility', 'hidden')
            svg.selectAll('.county')
                .style('visibility', 'visible')
        } else if(geoValue === "tracts") {
            svg.selectAll('.county')
                .style('visibility', 'hidden')
            svg.selectAll('.tract')
                .style('visibility', 'visible')
        }
    })
}

drawMap();

var expanded = false;
function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}


