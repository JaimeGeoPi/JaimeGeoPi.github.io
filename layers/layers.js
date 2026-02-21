var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortoimagen',
                            popuplayertitle: 'Ortoimagen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var format_Referenciaprovincias_1 = new ol.format.GeoJSON();
var features_Referenciaprovincias_1 = format_Referenciaprovincias_1.readFeatures(json_Referenciaprovincias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Referenciaprovincias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Referenciaprovincias_1.addFeatures(features_Referenciaprovincias_1);
var lyr_Referenciaprovincias_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Referenciaprovincias_1, 
                style: style_Referenciaprovincias_1,
                popuplayertitle: 'Referencia (provincias)',
                interactive: false,
                title: '<img src="styles/legend/Referenciaprovincias_1.png" /> Referencia (provincias)'
            });
var format_provinciasnumpuntos_2 = new ol.format.GeoJSON();
var features_provinciasnumpuntos_2 = format_provinciasnumpuntos_2.readFeatures(json_provinciasnumpuntos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provinciasnumpuntos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provinciasnumpuntos_2.addFeatures(features_provinciasnumpuntos_2);
var lyr_provinciasnumpuntos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provinciasnumpuntos_2, 
                style: style_provinciasnumpuntos_2,
                popuplayertitle: 'provincias (num. puntos)',
                interactive: false,
    title: 'provincias (num. puntos)<br />\
    <img src="styles/legend/provinciasnumpuntos_2_0.png" /> 0<br />\
    <img src="styles/legend/provinciasnumpuntos_2_1.png" /> 1<br />\
    <img src="styles/legend/provinciasnumpuntos_2_2.png" /> 2<br />\
    <img src="styles/legend/provinciasnumpuntos_2_3.png" /> 3<br />\
    <img src="styles/legend/provinciasnumpuntos_2_4.png" /> 4<br />\
    <img src="styles/legend/provinciasnumpuntos_2_5.png" /> 5<br />\
    <img src="styles/legend/provinciasnumpuntos_2_6.png" /> 8<br />\
    <img src="styles/legend/provinciasnumpuntos_2_7.png" /> 59<br />\
    <img src="styles/legend/provinciasnumpuntos_2_8.png" /> <br />' });
var format_Todoslospuntos_3 = new ol.format.GeoJSON();
var features_Todoslospuntos_3 = format_Todoslospuntos_3.readFeatures(json_Todoslospuntos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Todoslospuntos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Todoslospuntos_3.addFeatures(features_Todoslospuntos_3);
var lyr_Todoslospuntos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Todoslospuntos_3, 
                style: style_Todoslospuntos_3,
                popuplayertitle: 'Todos los puntos',
                interactive: true,
    title: 'Todos los puntos<br />\
    <img src="styles/legend/Todoslospuntos_3_0.png" /> Siesta del borrego  (78)<br />\
    <img src="styles/legend/Todoslospuntos_3_1.png" /> Siesta del burro/burra  (16)<br />\
    <img src="styles/legend/Todoslospuntos_3_2.png" /> Siesta del carnero  (8)<br />\
    <img src="styles/legend/Todoslospuntos_3_3.png" /> Sin nombre  (4)<br />\
    <img src="styles/legend/Todoslospuntos_3_4.png" /> Siesta  (3)<br />\
    <img src="styles/legend/Todoslospuntos_3_5.png" /> Siesta del canónigo  (2)<br />\
    <img src="styles/legend/Todoslospuntos_3_6.png" /> Siesta del obispo  (2)<br />\
    <img src="styles/legend/Todoslospuntos_3_7.png" /> Embeltir-se  (2)<br />\
    <img src="styles/legend/Todoslospuntos_3_8.png" /> Becada  (2)<br />\
    <img src="styles/legend/Todoslospuntos_3_9.png" /> Siesta del vencejo  (1)<br />\
    <img src="styles/legend/Todoslospuntos_3_10.png" /> Siesta del gato  (1)<br />\
    <img src="styles/legend/Todoslospuntos_3_11.png" /> Siesta del cura  (1)<br />\
    <img src="styles/legend/Todoslospuntos_3_12.png" /> Pigazu  (1)<br />\
    <img src="styles/legend/Todoslospuntos_3_13.png" /> Siesta boba  (1)<br />\
    <img src="styles/legend/Todoslospuntos_3_14.png" /> Microsiesta  (1)<br />\
    <img src="styles/legend/Todoslospuntos_3_15.png" /> Nickerschen  (1)<br />\
    <img src="styles/legend/Todoslospuntos_3_16.png" /> Cabezada  (1)<br />\
    <img src="styles/legend/Todoslospuntos_3_17.png" /> Siesta del gorrión   (1)<br />\
    <img src="styles/legend/Todoslospuntos_3_18.png" /> Siesta de la Monja  (1)<br />' });
var format_Respuestas_mayoritarias_4 = new ol.format.GeoJSON();
var features_Respuestas_mayoritarias_4 = format_Respuestas_mayoritarias_4.readFeatures(json_Respuestas_mayoritarias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Respuestas_mayoritarias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Respuestas_mayoritarias_4.addFeatures(features_Respuestas_mayoritarias_4);
var lyr_Respuestas_mayoritarias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Respuestas_mayoritarias_4, 
                style: style_Respuestas_mayoritarias_4,
                popuplayertitle: 'Respuestas_mayoritarias',
                interactive: true,
    title: 'Respuestas_mayoritarias<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_0.png" /> Siesta del borrego  (78)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_1.png" /> Siesta del burro/burra  (16)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_2.png" /> Siesta del carnero  (8)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_3.png" /> Sin nombre  (4)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_4.png" /> Siesta  (3)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_5.png" /> Siesta del canónigo  (2)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_6.png" /> Siesta del obispo  (2)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_7.png" /> Embeltir-se  (2)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_8.png" /> Becada  (2)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_9.png" /> Siesta del vencejo  (1)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_10.png" /> Siesta del gato  (1)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_11.png" /> Siesta del cura  (1)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_12.png" /> Pigazu  (1)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_13.png" /> Siesta boba  (1)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_14.png" /> Microsiesta  (1)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_15.png" /> Nickerschen  (1)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_16.png" /> Cabezada  (1)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_17.png" /> Siesta del gorrión   (1)<br />\
    <img src="styles/legend/Respuestas_mayoritarias_4_18.png" /> Siesta de la Monja  (1)<br />' });

lyr_Ortoimagen_0.setVisible(true);lyr_Referenciaprovincias_1.setVisible(true);lyr_provinciasnumpuntos_2.setVisible(true);lyr_Todoslospuntos_3.setVisible(true);lyr_Respuestas_mayoritarias_4.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_Referenciaprovincias_1,lyr_provinciasnumpuntos_2,lyr_Todoslospuntos_3,lyr_Respuestas_mayoritarias_4];
lyr_Referenciaprovincias_1.set('fieldAliases', {'fid': 'fid', 'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', });
lyr_provinciasnumpuntos_2.set('fieldAliases', {'fid': 'fid', 'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', 'prov_norm': 'prov_norm', 'count': 'count', });
lyr_Todoslospuntos_3.set('fieldAliases', {'fid': 'fid', 'Marca temporal': 'Marca temporal', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': '¿Qué edad tienes? Por si hubiera un efecto "generacional"', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)', 'Nombre_siesta': 'Nombre_siesta', 'Provincia': 'Provincia', 'Población': 'Población', 'Comentarios a las respuestas': 'Comentarios a las respuestas', 'pop_norm': 'pop_norm', 'prov_norm': 'prov_norm', 'count': 'count', 'matched_municipio': 'matched_municipio', 'matched_provincia': 'matched_provincia', });
lyr_Respuestas_mayoritarias_4.set('fieldAliases', {'fid': 'fid', 'Marca temporal': 'Marca temporal', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': '¿Qué edad tienes? Por si hubiera un efecto "generacional"', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)', 'Nombre_siesta': 'Nombre_siesta', 'Provincia': 'Provincia', 'Población': 'Población', 'Comentarios a las respuestas': 'Comentarios a las respuestas', 'pop_norm': 'pop_norm', 'prov_norm': 'prov_norm', 'count': 'count', 'matched_municipio': 'matched_municipio', 'matched_provincia': 'matched_provincia', });
lyr_Referenciaprovincias_1.set('fieldImages', {'fid': 'TextEdit', 'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', });
lyr_provinciasnumpuntos_2.set('fieldImages', {'fid': 'TextEdit', 'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', 'prov_norm': 'TextEdit', 'count': 'TextEdit', });
lyr_Todoslospuntos_3.set('fieldImages', {'fid': 'TextEdit', 'Marca temporal': 'TextEdit', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'TextEdit', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'TextEdit', 'Nombre_siesta': 'TextEdit', 'Provincia': 'TextEdit', 'Población': 'TextEdit', 'Comentarios a las respuestas': 'TextEdit', 'pop_norm': 'TextEdit', 'prov_norm': 'TextEdit', 'count': 'TextEdit', 'matched_municipio': 'TextEdit', 'matched_provincia': 'TextEdit', });
lyr_Respuestas_mayoritarias_4.set('fieldImages', {'fid': 'TextEdit', 'Marca temporal': 'TextEdit', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'TextEdit', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'TextEdit', 'Nombre_siesta': 'TextEdit', 'Provincia': 'TextEdit', 'Población': 'TextEdit', 'Comentarios a las respuestas': 'TextEdit', 'pop_norm': 'TextEdit', 'prov_norm': 'TextEdit', 'count': 'TextEdit', 'matched_municipio': 'TextEdit', 'matched_provincia': 'TextEdit', });
lyr_Referenciaprovincias_1.set('fieldLabels', {'fid': 'no label', 'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'no label', 'CODNUT1': 'no label', 'CODNUT2': 'no label', 'CODNUT3': 'no label', });
lyr_provinciasnumpuntos_2.set('fieldLabels', {'fid': 'no label', 'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'no label', 'CODNUT1': 'no label', 'CODNUT2': 'no label', 'CODNUT3': 'no label', 'prov_norm': 'no label', 'count': 'no label', });
lyr_Todoslospuntos_3.set('fieldLabels', {'fid': 'hidden field', 'Marca temporal': 'hidden field', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'hidden field', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'hidden field', 'Nombre_siesta': 'inline label - visible with data', 'Provincia': 'hidden field', 'Población': 'hidden field', 'Comentarios a las respuestas': 'hidden field', 'pop_norm': 'hidden field', 'prov_norm': 'hidden field', 'count': 'inline label - visible with data', 'matched_municipio': 'hidden field', 'matched_provincia': 'hidden field', });
lyr_Respuestas_mayoritarias_4.set('fieldLabels', {'fid': 'hidden field', 'Marca temporal': 'hidden field', '¿Qué edad tienes? Por si hubiera un efecto "generacional"': 'hidden field', '¿Cómo te refieres a la siesta previa a comida? (Siesta del borrego, siesta del carnero, ...)': 'hidden field', 'Nombre_siesta': 'inline label - visible with data', 'Provincia': 'hidden field', 'Población': 'hidden field', 'Comentarios a las respuestas': 'hidden field', 'pop_norm': 'hidden field', 'prov_norm': 'hidden field', 'count': 'inline label - visible with data', 'matched_municipio': 'hidden field', 'matched_provincia': 'hidden field', });
lyr_Respuestas_mayoritarias_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});