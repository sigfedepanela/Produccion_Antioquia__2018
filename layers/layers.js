var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Antioquia_1 = new ol.format.GeoJSON();
var features_Antioquia_1 = format_Antioquia_1.readFeatures(json_Antioquia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antioquia_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Antioquia_1.addFeatures(features_Antioquia_1);var lyr_Antioquia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Antioquia_1, 
                style: style_Antioquia_1,
                title: '<img src="styles/legend/Antioquia_1.png" /> Antioquia'
            });var format_ProduccinToneladasdeCaaPanelera_2 = new ol.format.GeoJSON();
var features_ProduccinToneladasdeCaaPanelera_2 = format_ProduccinToneladasdeCaaPanelera_2.readFeatures(json_ProduccinToneladasdeCaaPanelera_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduccinToneladasdeCaaPanelera_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ProduccinToneladasdeCaaPanelera_2.addFeatures(features_ProduccinToneladasdeCaaPanelera_2);var lyr_ProduccinToneladasdeCaaPanelera_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProduccinToneladasdeCaaPanelera_2, 
                style: style_ProduccinToneladasdeCaaPanelera_2,
    title: 'Producción (Toneladas) de Caña Panelera<br />\
    <img src="styles/legend/ProduccinToneladasdeCaaPanelera_2_0.png" />  25 - 1061 <br />\
    <img src="styles/legend/ProduccinToneladasdeCaaPanelera_2_1.png" />  1061 - 2944 <br />\
    <img src="styles/legend/ProduccinToneladasdeCaaPanelera_2_2.png" />  2944 - 6943 <br />\
    <img src="styles/legend/ProduccinToneladasdeCaaPanelera_2_3.png" />  6943 - 10804 <br />\
    <img src="styles/legend/ProduccinToneladasdeCaaPanelera_2_4.png" />  10804 - 15823 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Antioquia_1.setVisible(true);lyr_ProduccinToneladasdeCaaPanelera_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Antioquia_1,lyr_ProduccinToneladasdeCaaPanelera_2];
lyr_Antioquia_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', 'AÑO': 'AÑO', });
lyr_ProduccinToneladasdeCaaPanelera_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/Ha)': 'REND.(Ton/Ha)', });
lyr_Antioquia_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', 'AÑO': 'Range', });
lyr_ProduccinToneladasdeCaaPanelera_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/Ha)': 'TextEdit', });
lyr_Antioquia_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', 'AÑO': 'inline label', });
lyr_ProduccinToneladasdeCaaPanelera_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/Ha)': 'inline label', });
lyr_ProduccinToneladasdeCaaPanelera_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});