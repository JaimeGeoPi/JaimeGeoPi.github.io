var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Provincia_1 = new ol.format.GeoJSON();
var features_Provincia_1 = format_Provincia_1.readFeatures(json_Provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincia_1.addFeatures(features_Provincia_1);
var lyr_Provincia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincia_1, 
                style: style_Provincia_1,
                popuplayertitle: 'Provincia',
                interactive: false,
                title: '<img src="styles/legend/Provincia_1.png" /> Provincia'
            });
var format_respuestas_puntos_2 = new ol.format.GeoJSON();
var features_respuestas_puntos_2 = format_respuestas_puntos_2.readFeatures(json_respuestas_puntos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_respuestas_puntos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_respuestas_puntos_2.addFeatures(features_respuestas_puntos_2);
var lyr_respuestas_puntos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_respuestas_puntos_2, 
                style: style_respuestas_puntos_2,
                popuplayertitle: 'respuestas_puntos',
                interactive: true,
    title: 'respuestas_puntos<br />\
    <img src="styles/legend/respuestas_puntos_2_0.png" /> Siesta del borrego  (101)<br />\
    <img src="styles/legend/respuestas_puntos_2_1.png" /> Siesta del burro/burra  (27)<br />\
    <img src="styles/legend/respuestas_puntos_2_2.png" /> Siesta del carnero  (16)<br />\
    <img src="styles/legend/respuestas_puntos_2_3.png" /> No  (8)<br />\
    <img src="styles/legend/respuestas_puntos_2_4.png" /> Siesta del obispo  (3)<br />\
    <img src="styles/legend/respuestas_puntos_2_5.png" /> Siesta del canónigo  (3)<br />\
    <img src="styles/legend/respuestas_puntos_2_6.png" /> Siesta  (2)<br />\
    <img src="styles/legend/respuestas_puntos_2_7.png" /> Embeltir-se  (2)<br />\
    <img src="styles/legend/respuestas_puntos_2_8.png" /> Becada  (2)<br />\
    <img src="styles/legend/respuestas_puntos_2_9.png" /> Siesta del cura  (2)<br />\
    <img src="styles/legend/respuestas_puntos_2_10.png" /> Siestecita  (2)<br />\
    <img src="styles/legend/respuestas_puntos_2_11.png" /> A parba  (2)<br />\
    <img src="styles/legend/respuestas_puntos_2_12.png" /> Siesta del cordero  (2)<br />\
    <img src="styles/legend/respuestas_puntos_2_13.png" /> Siesta boba  (1)<br />\
    <img src="styles/legend/respuestas_puntos_2_14.png" /> Microsiesta  (1)<br />\
    <img src="styles/legend/respuestas_puntos_2_15.png" /> Cabezada  (1)<br />\
    <img src="styles/legend/respuestas_puntos_2_16.png" /> Siesta del gorrión   (1)<br />\
    <img src="styles/legend/respuestas_puntos_2_17.png" /> Siesta de la monja  (1)<br />\
    <img src="styles/legend/respuestas_puntos_2_18.png" /> Siesta del vencejo  (1)<br />\
    <img src="styles/legend/respuestas_puntos_2_19.png" /> Pigazu  (1)<br />' });
var format_Grupos_principales_3 = new ol.format.GeoJSON();
var features_Grupos_principales_3 = format_Grupos_principales_3.readFeatures(json_Grupos_principales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grupos_principales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grupos_principales_3.addFeatures(features_Grupos_principales_3);
var lyr_Grupos_principales_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grupos_principales_3, 
                style: style_Grupos_principales_3,
                popuplayertitle: 'Grupos_principales',
                interactive: true,
    title: 'Grupos_principales<br />\
    <img src="styles/legend/Grupos_principales_3_0.png" /> Siesta del borrego<br />\
    <img src="styles/legend/Grupos_principales_3_1.png" /> Siesta del burro/burra<br />\
    <img src="styles/legend/Grupos_principales_3_2.png" /> Siesta del carnero<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Provincia_1.setVisible(true);lyr_respuestas_puntos_2.setVisible(true);lyr_Grupos_principales_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Provincia_1,lyr_respuestas_puntos_2,lyr_Grupos_principales_3];
lyr_Provincia_1.set('fieldAliases', {'fid': 'fid', 'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', 'layer': 'layer', 'path': 'path', });
lyr_respuestas_puntos_2.set('fieldAliases', {'fid': 'fid', 'Indice': 'Indice', 'Marca temporal': 'Marca temporal', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': '¿Qué edad tienes? Por si hubiera un efecto "generacional"', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)', 'Nombre_siesta': 'Nombre_siesta', 'Provincia': 'Provincia', 'Población': 'Población', 'Comentarios a las respuestas': 'Comentarios a las respuestas', 'pop_norm': 'pop_norm', 'prov_norm': 'prov_norm', 'count': 'count', 'matched_municipio': 'matched_municipio', 'matched_provincia': 'matched_provincia', });
lyr_Grupos_principales_3.set('fieldAliases', {'fid': 'fid', 'Indice': 'Indice', 'Marca temporal': 'Marca temporal', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': '¿Qué edad tienes? Por si hubiera un efecto "generacional"', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)', 'Nombre_siesta': 'Nombre_siesta', 'Provincia': 'Provincia', 'Población': 'Población', 'Comentarios a las respuestas': 'Comentarios a las respuestas', 'pop_norm': 'pop_norm', 'prov_norm': 'prov_norm', 'count': 'count', 'matched_municipio': 'matched_municipio', 'matched_provincia': 'matched_provincia', });
lyr_Provincia_1.set('fieldImages', {'fid': 'TextEdit', 'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_respuestas_puntos_2.set('fieldImages', {'fid': 'TextEdit', 'Indice': 'TextEdit', 'Marca temporal': 'TextEdit', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'TextEdit', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'TextEdit', 'Nombre_siesta': 'TextEdit', 'Provincia': 'TextEdit', 'Población': 'TextEdit', 'Comentarios a las respuestas': 'TextEdit', 'pop_norm': 'TextEdit', 'prov_norm': 'TextEdit', 'count': 'TextEdit', 'matched_municipio': 'TextEdit', 'matched_provincia': 'TextEdit', });
lyr_Grupos_principales_3.set('fieldImages', {'fid': 'TextEdit', 'Indice': 'TextEdit', 'Marca temporal': 'TextEdit', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'TextEdit', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'TextEdit', 'Nombre_siesta': 'TextEdit', 'Provincia': 'TextEdit', 'Población': 'TextEdit', 'Comentarios a las respuestas': 'TextEdit', 'pop_norm': 'TextEdit', 'prov_norm': 'TextEdit', 'count': 'TextEdit', 'matched_municipio': 'TextEdit', 'matched_provincia': 'TextEdit', });
lyr_Provincia_1.set('fieldLabels', {'fid': 'hidden field', 'INSPIREID': 'hidden field', 'COUNTRY': 'hidden field', 'NATLEV': 'hidden field', 'NATLEVNAME': 'hidden field', 'NATCODE': 'hidden field', 'NAMEUNIT': 'hidden field', 'CODNUT1': 'hidden field', 'CODNUT2': 'hidden field', 'CODNUT3': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_respuestas_puntos_2.set('fieldLabels', {'fid': 'hidden field', 'Indice': 'hidden field', 'Marca temporal': 'hidden field', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'hidden field', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'hidden field', 'Nombre_siesta': 'inline label - visible with data', 'Provincia': 'hidden field', 'Población': 'hidden field', 'Comentarios a las respuestas': 'hidden field', 'pop_norm': 'hidden field', 'prov_norm': 'hidden field', 'count': 'inline label - visible with data', 'matched_municipio': 'hidden field', 'matched_provincia': 'hidden field', });
lyr_Grupos_principales_3.set('fieldLabels', {'fid': 'hidden field', 'Indice': 'hidden field', 'Marca temporal': 'hidden field', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'hidden field', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'hidden field', 'Nombre_siesta': 'inline label - visible with data', 'Provincia': 'hidden field', 'Población': 'hidden field', 'Comentarios a las respuestas': 'hidden field', 'pop_norm': 'hidden field', 'prov_norm': 'hidden field', 'count': 'inline label - visible with data', 'matched_municipio': 'hidden field', 'matched_provincia': 'hidden field', });
lyr_Grupos_principales_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});