
        function onEachFeature(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.popupContent) {
                layer.bindPopup(feature.properties.popupContent);
            }
        }



        function main_map_init (map, options) {
            var geojsonFeature = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.99404, 39.75621]
            }
        };
            var geojsonFeature2 = {
            "type": "Feature",
            "properties": {
                "name": "UPenn",
                "amenity": "University",
                "popupContent": "This is where you learn"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.193214,39.952219]
            }
        };
            var myLines = [{
                "type": "LineString",
                "coordinates": [[-104.99404, 39.75621], [-75.193214,39.952219]]
            }];

            var myStyle = {
                "color": "#ff7800",
                "weight": 3,
                "opacity": 0.70
            };
            var last_point = 0;
            //L.geoJson(geojsonFeature, {onEachFeature: onEachFeature}).addTo(map);
            //L.geoJson(geojsonFeature2, {onEachFeature: onEachFeature}).addTo(map);
            //L.geoJson(myLines, {style: myStyle}).addTo(map);
            function onMapClick(e) {
                content = prompt("name of location?");
                var clickFeature = {
                "type": "Feature",
                "properties": {
                "name": "Clicked",
                "amenity": "None",
                "popupContent": content
            },
            "geometry": {
                "type": "Point",
                "coordinates": [e.latlng.lng, e.latlng.lat]
            }
        };      
            if(last_point === 0){
                    last_point = [e.latlng.lng, e.latlng.lat];
                }
            else {
                var clickLine = [{
                "type": "LineString",
                "coordinates": [last_point, [e.latlng.lng, e.latlng.lat]]
            }];
            last_point = [e.latlng.lng, e.latlng.lat];
            L.geoJson(clickLine, {style: myStyle}).addTo(map);
        }

        L.geoJson(clickFeature, {onEachFeature: onEachFeature}).addTo(map);
        }
        map.on('click', onMapClick);

        }