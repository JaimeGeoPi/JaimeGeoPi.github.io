ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4258").setExtent([-18.161181, 27.637723, 4.327785, 43.792380]);
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4258'});
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
var format_provincias_count_2 = new ol.format.GeoJSON();
var features_provincias_count_2 = format_provincias_count_2.readFeatures(json_provincias_count_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4258'});
var jsonSource_provincias_count_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincias_count_2.addFeatures(features_provincias_count_2);
var lyr_provincias_count_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provincias_count_2, 
                style: style_provincias_count_2,
                popuplayertitle: 'provincias_count',
                interactive: true,
    title: 'provincias_count<br />\
    <img src="styles/legend/provincias_count_2_0.png" /> 0<br />\
    <img src="styles/legend/provincias_count_2_1.png" /> 1<br />\
    <img src="styles/legend/provincias_count_2_2.png" /> 2<br />\
    <img src="styles/legend/provincias_count_2_3.png" /> 3<br />\
    <img src="styles/legend/provincias_count_2_4.png" /> 4<br />\
    <img src="styles/legend/provincias_count_2_5.png" /> 5<br />\
    <img src="styles/legend/provincias_count_2_6.png" /> 6<br />\
    <img src="styles/legend/provincias_count_2_7.png" /> 7<br />\
    <img src="styles/legend/provincias_count_2_8.png" /> 8<br />\
    <img src="styles/legend/provincias_count_2_9.png" /> 13<br />\
    <img src="styles/legend/provincias_count_2_10.png" /> 64<br />\
    <img src="styles/legend/provincias_count_2_11.png" /> <br />' });
var format_respuestas_puntos_3 = new ol.format.GeoJSON();
var features_respuestas_puntos_3 = format_respuestas_puntos_3.readFeatures(json_respuestas_puntos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4258'});
var jsonSource_respuestas_puntos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_respuestas_puntos_3.addFeatures(features_respuestas_puntos_3);
var lyr_respuestas_puntos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_respuestas_puntos_3, 
                style: style_respuestas_puntos_3,
                popuplayertitle: 'respuestas_puntos',
                interactive: true,
    title: 'respuestas_puntos<br />\
    <img src="styles/legend/respuestas_puntos_3_0.png" /> Siesta del borrego  (108)<br />\
    <img src="styles/legend/respuestas_puntos_3_1.png" /> Siesta del burro/burra  (29)<br />\
    <img src="styles/legend/respuestas_puntos_3_2.png" /> Siesta del carnero  (19)<br />\
    <img src="styles/legend/respuestas_puntos_3_3.png" /> No  (9)<br />\
    <img src="styles/legend/respuestas_puntos_3_4.png" /> Siesta del obispo  (5)<br />\
    <img src="styles/legend/respuestas_puntos_3_5.png" /> Siesta  (3)<br />\
    <img src="styles/legend/respuestas_puntos_3_6.png" /> Pigazu  (3)<br />\
    <img src="styles/legend/respuestas_puntos_3_7.png" /> Siesta del canónigo  (3)<br />\
    <img src="styles/legend/respuestas_puntos_3_8.png" /> Siesta del cordero  (3)<br />\
    <img src="styles/legend/respuestas_puntos_3_9.png" /> Embeltir-se  (2)<br />\
    <img src="styles/legend/respuestas_puntos_3_10.png" /> Becada  (2)<br />\
    <img src="styles/legend/respuestas_puntos_3_11.png" /> Siesta del vencejo  (2)<br />\
    <img src="styles/legend/respuestas_puntos_3_12.png" /> Siesta del cura  (2)<br />\
    <img src="styles/legend/respuestas_puntos_3_13.png" /> Siestecita  (2)<br />\
    <img src="styles/legend/respuestas_puntos_3_14.png" /> A parba  (2)<br />\
    <img src="styles/legend/respuestas_puntos_3_15.png" /> Siesta del cochino  (2)<br />\
    <img src="styles/legend/respuestas_puntos_3_16.png" /> Siesta boba  (1)<br />\
    <img src="styles/legend/respuestas_puntos_3_17.png" /> Microsiesta  (1)<br />\
    <img src="styles/legend/respuestas_puntos_3_18.png" /> Cabezada  (1)<br />\
    <img src="styles/legend/respuestas_puntos_3_19.png" /> Siesta del gorrión   (1)<br />\
    <img src="styles/legend/respuestas_puntos_3_20.png" /> Siesta de la monja  (1)<br />\
    <img src="styles/legend/respuestas_puntos_3_21.png" /> Siesta del pastor  (1)<br />' });
var format_Grupos_principales_grupos_principales_4 = new ol.format.GeoJSON();
var features_Grupos_principales_grupos_principales_4 = format_Grupos_principales_grupos_principales_4.readFeatures(json_Grupos_principales_grupos_principales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4258'});
var jsonSource_Grupos_principales_grupos_principales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grupos_principales_grupos_principales_4.addFeatures(features_Grupos_principales_grupos_principales_4);
var lyr_Grupos_principales_grupos_principales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grupos_principales_grupos_principales_4, 
                style: style_Grupos_principales_grupos_principales_4,
                popuplayertitle: 'Grupos_principales_ — grupos_principales',
                interactive: true,
    title: 'Grupos_principales_ — grupos_principales<br />\
    <img src="styles/legend/Grupos_principales_grupos_principales_4_0.png" /> Siesta del borrego  (108)<br />\
    <img src="styles/legend/Grupos_principales_grupos_principales_4_1.png" /> Siesta del burro/burra  (29)<br />\
    <img src="styles/legend/Grupos_principales_grupos_principales_4_2.png" /> Siesta del carnero  (19)<br />\
    <img src="styles/legend/Grupos_principales_grupos_principales_4_3.png" /> Pigazu  (3)<br />\
    <img src="styles/legend/Grupos_principales_grupos_principales_4_4.png" /> Siesta del cochino  (2)<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Provincia_1.setVisible(true);lyr_provincias_count_2.setVisible(true);lyr_respuestas_puntos_3.setVisible(true);lyr_Grupos_principales_grupos_principales_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Provincia_1,lyr_provincias_count_2,lyr_respuestas_puntos_3,lyr_Grupos_principales_grupos_principales_4];
lyr_Provincia_1.set('fieldAliases', {'fid': 'fid', 'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', 'layer': 'layer', 'path': 'path', });
lyr_provincias_count_2.set('fieldAliases', {'fid': 'fid', 'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', 'layer': 'layer', 'path': 'path', 'prov_norm': 'prov_norm', 'count': 'count', 'siesta_label': 'siesta_label', });
lyr_respuestas_puntos_3.set('fieldAliases', {'fid': 'fid', 'Indice': 'Indice', 'Marca temporal': 'Marca temporal', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': '¿Qué edad tienes? Por si hubiera un efecto "generacional"', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)', 'Nombre_siesta': 'Nombre_siesta', 'Provincia': 'Provincia', 'Población': 'Población', 'Comentarios a las respuestas': 'Comentarios a las respuestas', 'pop_norm': 'pop_norm', 'prov_norm': 'prov_norm', 'count': 'count', 'matched_municipio': 'matched_municipio', 'matched_provincia': 'matched_provincia', });
lyr_Grupos_principales_grupos_principales_4.set('fieldAliases', {'fid': 'fid', 'Indice': 'Indice', 'Marca temporal': 'Marca temporal', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': '¿Qué edad tienes? Por si hubiera un efecto "generacional"', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)', 'Nombre_siesta': 'Nombre_siesta', 'Provincia': 'Provincia', 'Población': 'Población', 'Comentarios a las respuestas': 'Comentarios a las respuestas', 'pop_norm': 'pop_norm', 'prov_norm': 'prov_norm', 'count': 'count', 'matched_municipio': 'matched_municipio', 'matched_provincia': 'matched_provincia', });
lyr_Provincia_1.set('fieldImages', {'fid': 'TextEdit', 'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_provincias_count_2.set('fieldImages', {'fid': 'TextEdit', 'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'prov_norm': 'TextEdit', 'count': 'TextEdit', 'siesta_label': 'TextEdit', });
lyr_respuestas_puntos_3.set('fieldImages', {'fid': 'TextEdit', 'Indice': 'TextEdit', 'Marca temporal': 'TextEdit', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'TextEdit', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'TextEdit', 'Nombre_siesta': 'TextEdit', 'Provincia': 'TextEdit', 'Población': 'TextEdit', 'Comentarios a las respuestas': 'TextEdit', 'pop_norm': 'TextEdit', 'prov_norm': 'TextEdit', 'count': 'TextEdit', 'matched_municipio': 'TextEdit', 'matched_provincia': 'TextEdit', });
lyr_Grupos_principales_grupos_principales_4.set('fieldImages', {'fid': 'TextEdit', 'Indice': 'TextEdit', 'Marca temporal': 'TextEdit', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'TextEdit', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'TextEdit', 'Nombre_siesta': 'TextEdit', 'Provincia': 'TextEdit', 'Población': 'TextEdit', 'Comentarios a las respuestas': 'TextEdit', 'pop_norm': 'TextEdit', 'prov_norm': 'TextEdit', 'count': 'TextEdit', 'matched_municipio': 'TextEdit', 'matched_provincia': 'TextEdit', });
lyr_Provincia_1.set('fieldLabels', {'fid': 'hidden field', 'INSPIREID': 'hidden field', 'COUNTRY': 'hidden field', 'NATLEV': 'hidden field', 'NATLEVNAME': 'hidden field', 'NATCODE': 'hidden field', 'NAMEUNIT': 'hidden field', 'CODNUT1': 'hidden field', 'CODNUT2': 'hidden field', 'CODNUT3': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_provincias_count_2.set('fieldLabels', {'fid': 'hidden field', 'INSPIREID': 'hidden field', 'COUNTRY': 'hidden field', 'NATLEV': 'hidden field', 'NATLEVNAME': 'hidden field', 'NATCODE': 'hidden field', 'NAMEUNIT': 'hidden field', 'CODNUT1': 'hidden field', 'CODNUT2': 'hidden field', 'CODNUT3': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'prov_norm': 'hidden field', 'count': 'inline label - visible with data', 'siesta_label': 'inline label - visible with data', });
lyr_respuestas_puntos_3.set('fieldLabels', {'fid': 'hidden field', 'Indice': 'hidden field', 'Marca temporal': 'hidden field', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'hidden field', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'hidden field', 'Nombre_siesta': 'inline label - visible with data', 'Provincia': 'hidden field', 'Población': 'hidden field', 'Comentarios a las respuestas': 'hidden field', 'pop_norm': 'hidden field', 'prov_norm': 'hidden field', 'count': 'inline label - visible with data', 'matched_municipio': 'hidden field', 'matched_provincia': 'hidden field', });
lyr_Grupos_principales_grupos_principales_4.set('fieldLabels', {'fid': 'hidden field', 'Indice': 'hidden field', 'Marca temporal': 'hidden field', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'hidden field', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'hidden field', 'Nombre_siesta': 'inline label - visible with data', 'Provincia': 'hidden field', 'Población': 'hidden field', 'Comentarios a las respuestas': 'hidden field', 'pop_norm': 'hidden field', 'prov_norm': 'hidden field', 'count': 'inline label - visible with data', 'matched_municipio': 'hidden field', 'matched_provincia': 'hidden field', });
lyr_Grupos_principales_grupos_principales_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});