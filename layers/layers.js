var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_JalanNasionalNonTol_1 = new ol.format.GeoJSON();
var features_JalanNasionalNonTol_1 = format_JalanNasionalNonTol_1.readFeatures(json_JalanNasionalNonTol_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanNasionalNonTol_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanNasionalNonTol_1.addFeatures(features_JalanNasionalNonTol_1);
var lyr_JalanNasionalNonTol_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanNasionalNonTol_1, 
                style: style_JalanNasionalNonTol_1,
                popuplayertitle: 'Jalan Nasional Non-Tol',
                interactive: true,
                title: '<img src="styles/legend/JalanNasionalNonTol_1.png" /> Jalan Nasional Non-Tol'
            });
var format_JalanNasionalTol_2 = new ol.format.GeoJSON();
var features_JalanNasionalTol_2 = format_JalanNasionalTol_2.readFeatures(json_JalanNasionalTol_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanNasionalTol_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanNasionalTol_2.addFeatures(features_JalanNasionalTol_2);
var lyr_JalanNasionalTol_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanNasionalTol_2, 
                style: style_JalanNasionalTol_2,
                popuplayertitle: 'Jalan Nasional Tol',
                interactive: true,
                title: '<img src="styles/legend/JalanNasionalTol_2.png" /> Jalan Nasional Tol'
            });
var format_KawasanEkonomiKhusus_3 = new ol.format.GeoJSON();
var features_KawasanEkonomiKhusus_3 = format_KawasanEkonomiKhusus_3.readFeatures(json_KawasanEkonomiKhusus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanEkonomiKhusus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanEkonomiKhusus_3.addFeatures(features_KawasanEkonomiKhusus_3);
var lyr_KawasanEkonomiKhusus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanEkonomiKhusus_3, 
                style: style_KawasanEkonomiKhusus_3,
                popuplayertitle: 'Kawasan Ekonomi Khusus',
                interactive: true,
                title: '<img src="styles/legend/KawasanEkonomiKhusus_3.png" /> Kawasan Ekonomi Khusus'
            });
var format_KawasanIndustri_4 = new ol.format.GeoJSON();
var features_KawasanIndustri_4 = format_KawasanIndustri_4.readFeatures(json_KawasanIndustri_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanIndustri_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanIndustri_4.addFeatures(features_KawasanIndustri_4);
var lyr_KawasanIndustri_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanIndustri_4, 
                style: style_KawasanIndustri_4,
                popuplayertitle: 'Kawasan Industri',
                interactive: true,
                title: '<img src="styles/legend/KawasanIndustri_4.png" /> Kawasan Industri'
            });
var format_RencumJalanKepmenPU367_5 = new ol.format.GeoJSON();
var features_RencumJalanKepmenPU367_5 = format_RencumJalanKepmenPU367_5.readFeatures(json_RencumJalanKepmenPU367_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RencumJalanKepmenPU367_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RencumJalanKepmenPU367_5.addFeatures(features_RencumJalanKepmenPU367_5);
var lyr_RencumJalanKepmenPU367_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RencumJalanKepmenPU367_5, 
                style: style_RencumJalanKepmenPU367_5,
                popuplayertitle: 'Rencum Jalan (Kepmen PU 367)',
                interactive: true,
                title: '<img src="styles/legend/RencumJalanKepmenPU367_5.png" /> Rencum Jalan (Kepmen PU 367)'
            });
var format_PelabuhanUmum_6 = new ol.format.GeoJSON();
var features_PelabuhanUmum_6 = format_PelabuhanUmum_6.readFeatures(json_PelabuhanUmum_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PelabuhanUmum_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PelabuhanUmum_6.addFeatures(features_PelabuhanUmum_6);
cluster_PelabuhanUmum_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PelabuhanUmum_6
});
var lyr_PelabuhanUmum_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PelabuhanUmum_6, 
                style: style_PelabuhanUmum_6,
                popuplayertitle: 'Pelabuhan Umum',
                interactive: true,
                title: '<img src="styles/legend/PelabuhanUmum_6.png" /> Pelabuhan Umum'
            });
var format_TerminalKhusus_7 = new ol.format.GeoJSON();
var features_TerminalKhusus_7 = format_TerminalKhusus_7.readFeatures(json_TerminalKhusus_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalKhusus_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalKhusus_7.addFeatures(features_TerminalKhusus_7);
cluster_TerminalKhusus_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TerminalKhusus_7
});
var lyr_TerminalKhusus_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TerminalKhusus_7, 
                style: style_TerminalKhusus_7,
                popuplayertitle: 'Terminal Khusus',
                interactive: true,
                title: '<img src="styles/legend/TerminalKhusus_7.png" /> Terminal Khusus'
            });

lyr_Basemap_0.setVisible(true);lyr_JalanNasionalNonTol_1.setVisible(true);lyr_JalanNasionalTol_2.setVisible(true);lyr_KawasanEkonomiKhusus_3.setVisible(true);lyr_KawasanIndustri_4.setVisible(true);lyr_RencumJalanKepmenPU367_5.setVisible(true);lyr_PelabuhanUmum_6.setVisible(true);lyr_TerminalKhusus_7.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_JalanNasionalNonTol_1,lyr_JalanNasionalTol_2,lyr_KawasanEkonomiKhusus_3,lyr_KawasanIndustri_4,lyr_RencumJalanKepmenPU367_5,lyr_PelabuhanUmum_6,lyr_TerminalKhusus_7];
lyr_JalanNasionalNonTol_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KD_RUAS': 'KD_RUAS', 'NM_RUAS': 'NM_RUAS', 'NO_RUAS': 'NO_RUAS', 'FUNGSI': 'FUNGSI', 'KD_PROV': 'KD_PROV', 'KLS_JALAN': 'KLS_JALAN', 'PROVINSI': 'PROVINSI', 'NOTE': 'NOTE', 'LINTAS': 'LINTAS', 'PJG_SK': 'PJG_SK', 'FUNGSI_2': 'FUNGSI_2', 'KONDISI': 'KONDISI', 'TITLE': 'TITLE', 'REMARKS': 'REMARKS', 'REMARK': 'REMARK', });
lyr_JalanNasionalTol_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'ELEVATION': 'ELEVATION', 'OBJECTID_2': 'OBJECTID_2', 'KL_DAT_DAS': 'KL_DAT_DAS', 'NM_DAT_DAS': 'NM_DAT_DAS', 'STAT_BANG': 'STAT_BANG', 'STAT_URN': 'STAT_URN', 'FUNGSI': 'FUNGSI', 'MENDUKUNG': 'MENDUKUNG', 'URAIAN_DUK': 'URAIAN_DUK', 'STAT_DUK': 'STAT_DUK', 'NM_ALIAS': 'NM_ALIAS', 'KD_KEM': 'KD_KEM', 'KD_UNOR': 'KD_UNOR', 'KD_DAT_DAS': 'KD_DAT_DAS', 'KD_SK_RUAS': 'KD_SK_RUAS', 'KD_INF': 'KD_INF', 'NMR_RUAS': 'NMR_RUAS', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KAB_KOT': 'KAB_KOT', 'KECAMATAN': 'KECAMATAN', 'KEL_DESA': 'KEL_DESA', 'TITIKPGNAW': 'TITIKPGNAW', 'TITIKPGNAK': 'TITIKPGNAK', 'KD_PATOK': 'KD_PATOK', 'KM_AWAL': 'KM_AWAL', 'KM_AKHIR': 'KM_AKHIR', 'PJG_DATAR': 'PJG_DATAR', 'PJG_MIRING': 'PJG_MIRING', 'PJG_OPRS': 'PJG_OPRS', 'PJG_TOTAL': 'PJG_TOTAL', 'LBR_PKSN': 'LBR_PKSN', 'LBR_BAHU': 'LBR_BAHU', 'LBR_BADAN': 'LBR_BADAN', 'LHRT': 'LHRT', 'VCR': 'VCR', 'WKT_TEMPUH': 'WKT_TEMPUH', 'TIPE_JALAN': 'TIPE_JALAN', 'KAP_MST': 'KAP_MST', 'PRS_PKSASP': 'PRS_PKSASP', 'PRS_PKSRGD': 'PRS_PKSRGD', 'LKS_RAMP': 'LKS_RAMP', 'LKS_SIMP': 'LKS_SIMP', 'LKS_RESTA': 'LKS_RESTA', 'LKS_JMBT': 'LKS_JMBT', 'LKS_TRWG': 'LKS_TRWG', 'LKS_KCLKN': 'LKS_KCLKN', 'THN_BANG': 'THN_BANG', 'THN_PENA': 'THN_PENA', 'JNS_PENA': 'JNS_PENA', 'THN_PPJT': 'THN_PPJT', 'RCN_SUMBER': 'RCN_SUMBER', 'RCN_DASAR': 'RCN_DASAR', 'RCN_PRGS': 'RCN_PRGS', 'BUJT': 'BUJT', 'RCN_PRKSA': 'RCN_PRKSA', 'RCN_PRGM': 'RCN_PRGM', 'RNC_KAT': 'RNC_KAT', 'RCN_PRTS': 'RCN_PRTS', 'RCN_THTRGT': 'RCN_THTRGT', 'RCN_LINTAS': 'RCN_LINTAS', 'KOORD_X_AW': 'KOORD_X_AW', 'KOORD_Y_AW': 'KOORD_Y_AW', 'KOORD_X_AK': 'KOORD_X_AK', 'KOORD_Y_AK': 'KOORD_Y_AK', 'FOTO': 'FOTO', 'VIDEO': 'VIDEO', 'PETA': 'PETA', 'KET_LAIN': 'KET_LAIN', 'RCN_TOL': 'RCN_TOL', 'RCN_SEGMEN': 'RCN_SEGMEN', 'RCN_NMRUAS': 'RCN_NMRUAS', 'RCN_SHPLNG': 'RCN_SHPLNG', 'RCN_IKU': 'RCN_IKU', 'SHAPE_LE_1': 'SHAPE_LE_1', 'PJG_SEDIR': 'PJG_SEDIR', 'SHAPE_LENG': 'SHAPE_LENG', 'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'CLASS': 'CLASS', 'KET': 'KET', 'LENG_WGS': 'LENG_WGS', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'GM_LAYER': 'GM_LAYER', 'ID': 'ID', 'SHAPE_LE_2': 'SHAPE_LE_2', 'RUAS': 'RUAS', 'STATUS': 'STATUS', 'PANJANG': 'PANJANG', 'TITLE': 'TITLE', 'REMARKS': 'REMARKS', });
lyr_KawasanEkonomiKhusus_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'dasarhukum': 'dasarhukum', 'lokasi': 'lokasi', 'jeniskek': 'jeniskek', 'pengusul': 'pengusul', 'bupp': 'bupp', 'remark': 'remark', 'namobj': 'namobj', 'kutkek': 'kutkek', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KawasanIndustri_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'namobj': 'namobj', 'pengelola': 'pengelola', 'alamat': 'alamat', 'luas': 'luas', 'fokus_ind': 'fokus_ind', 'anchor_ind': 'anchor_ind', 'status': 'status', 'i_prinsip': 'i_prinsip', 'i_lokasi': 'i_lokasi', 'iuki': 'iuki', 'remark': 'remark', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RencumJalanKepmenPU367_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nm_ruas': 'nm_ruas', 'kd_prov': 'kd_prov', 'data_ver': 'data_ver', 'kd_ruas': 'kd_ruas', 'prov': 'prov', 'panjang': 'panjang', 'ket': 'ket', 'disclaimer': 'disclaimer', 'kode': 'kode', 'Lintas': 'Lintas', 'Shape_Leng': 'Shape_Leng', });
lyr_PelabuhanUmum_6.set('fieldAliases', {'objectid': 'objectid', 'lat': 'lat', 'lon': 'lon', 'namobj': 'namobj', 'kode': 'kode', 'fcode': 'fcode', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'tipe_pp': 'tipe_pp', 'nama_pp': 'nama_pp', 'alamat': 'alamat', 'kodepos': 'kodepos', 'notelp': 'notelp', 'surel': 'surel', 'sk_tap_rip': 'sk_tap_rip', 'sk_tap_lok': 'sk_tap_lok', 'izin_bng': 'izin_bng', 'thn_bng': 'thn_bng', 'izin_kmb': 'izin_kmb', 'thn_kmb': 'thn_kmb', 'izin_ops': 'izin_ops', 'thn_ops': 'thn_ops', 'aset': 'aset', 'nilai_aset': 'nilai_aset', 'stat_ops': 'stat_ops', 'klspel': 'klspel', 'stat_jln': 'stat_jln', 'kls_jln': 'kls_jln', 'pnj_jln': 'pnj_jln', 'stat_rel': 'stat_rel', 'jml_pns': 'jml_pns', 'tipe_opera': 'tipe_opera', 'operator': 'operator', 'lintas': 'lintas', 'jns_kpl': 'jns_kpl', 'hirrki': 'hirrki', 'jml_dmg': 'jml_dmg', 'pnj_dmg': 'pnj_dmg', 'dlm_klm': 'dlm_klm', 'bbt_kapal': 'bbt_kapal', 'ls_lap_pmp': 'ls_lap_pmp', 'term_pnp': 'term_pnp', 'ls_trm_pnp': 'ls_trm_pnp', 'term_ptk': 'term_ptk', 'ls_trm_ptk': 'ls_trm_ptk', 'term_crhc': 'term_crhc', 'ls_crhc': 'ls_crhc', 'term_crhk': 'term_crhk', 'ls_crhk': 'ls_crhk', 'kap_lay_br': 'kap_lay_br', 'ls_gdng_l1': 'ls_gdng_l1', 'ls_gdng_gp': 'ls_gdng_gp', 'ls_gdng_sc': 'ls_gdng_sc', 'ls_gdng_fd': 'ls_gdng_fd', 'ls_gdng_bd': 'ls_gdng_bd', 'ls_gdng_cd': 'ls_gdng_cd', 'ls_gdng_b3': 'ls_gdng_b3', 'ls_gdng_en': 'ls_gdng_en', 'jml_bunker': 'jml_bunker', 'kap_bunker': 'kap_bunker', 'ls_kantor': 'ls_kantor', 'ls_dag': 'ls_dag', 'kap_park': 'kap_park', 'ls_park': 'ls_park', 'ls_drh_krj': 'ls_drh_krj', 'ls_bng': 'ls_bng', 'ls_drh_k_1': 'ls_drh_k_1', 'ls_drh_kep': 'ls_drh_kep', 'remark': 'remark', });
lyr_TerminalKhusus_7.set('fieldAliases', {'objectid': 'objectid', 'namobj': 'namobj', 'kode': 'kode', 'lat': 'lat', 'lon': 'lon', 'fcode': 'fcode', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'tipe_pp': 'tipe_pp', 'nama_pp': 'nama_pp', 'alamat': 'alamat', 'prov': 'prov', 'kabkot': 'kabkot', 'kd_prov': 'kd_prov', 'kd_kabkot': 'kd_kabkot', 'alamat_pgl': 'alamat_pgl', 'prov_pgl': 'prov_pgl', 'kabkot_pgl': 'kabkot_pgl', 'kodepos': 'kodepos', 'notelp': 'notelp', 'surel': 'surel', 'sk_tap_lok': 'sk_tap_lok', 'izin_bng': 'izin_bng', 'thn_bng': 'thn_bng', 'izin_kmb': 'izin_kmb', 'thn_kmb': 'thn_kmb', 'izin_ops': 'izin_ops', 'thn_ops': 'thn_ops', 'status': 'status', 'stat_ops': 'stat_ops', 'bdg_keg': 'bdg_keg', 'stat_jln': 'stat_jln', 'kls_jln': 'kls_jln', 'pnj_jln': 'pnj_jln', 'stat_rel': 'stat_rel', 'jml_dmg': 'jml_dmg', 'pnj_dmg': 'pnj_dmg', 'dlm_klm': 'dlm_klm', 'bbt_kapal': 'bbt_kapal', 'luas': 'luas', 'pnbp': 'pnbp', 'remark': 'remark', });
lyr_JalanNasionalNonTol_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'KD_RUAS': 'TextEdit', 'NM_RUAS': 'TextEdit', 'NO_RUAS': 'TextEdit', 'FUNGSI': 'TextEdit', 'KD_PROV': 'TextEdit', 'KLS_JALAN': 'TextEdit', 'PROVINSI': 'TextEdit', 'NOTE': 'TextEdit', 'LINTAS': 'TextEdit', 'PJG_SK': 'TextEdit', 'FUNGSI_2': 'TextEdit', 'KONDISI': 'TextEdit', 'TITLE': 'TextEdit', 'REMARKS': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_JalanNasionalTol_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'ELEVATION': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'KL_DAT_DAS': 'TextEdit', 'NM_DAT_DAS': 'TextEdit', 'STAT_BANG': 'TextEdit', 'STAT_URN': 'TextEdit', 'FUNGSI': 'TextEdit', 'MENDUKUNG': 'TextEdit', 'URAIAN_DUK': 'TextEdit', 'STAT_DUK': 'TextEdit', 'NM_ALIAS': 'TextEdit', 'KD_KEM': 'TextEdit', 'KD_UNOR': 'TextEdit', 'KD_DAT_DAS': 'TextEdit', 'KD_SK_RUAS': 'TextEdit', 'KD_INF': 'TextEdit', 'NMR_RUAS': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KAB_KOT': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KEL_DESA': 'TextEdit', 'TITIKPGNAW': 'TextEdit', 'TITIKPGNAK': 'TextEdit', 'KD_PATOK': 'TextEdit', 'KM_AWAL': 'TextEdit', 'KM_AKHIR': 'TextEdit', 'PJG_DATAR': 'TextEdit', 'PJG_MIRING': 'TextEdit', 'PJG_OPRS': 'TextEdit', 'PJG_TOTAL': 'TextEdit', 'LBR_PKSN': 'TextEdit', 'LBR_BAHU': 'TextEdit', 'LBR_BADAN': 'TextEdit', 'LHRT': 'TextEdit', 'VCR': 'TextEdit', 'WKT_TEMPUH': 'TextEdit', 'TIPE_JALAN': 'TextEdit', 'KAP_MST': 'TextEdit', 'PRS_PKSASP': 'TextEdit', 'PRS_PKSRGD': 'TextEdit', 'LKS_RAMP': 'TextEdit', 'LKS_SIMP': 'TextEdit', 'LKS_RESTA': 'TextEdit', 'LKS_JMBT': 'TextEdit', 'LKS_TRWG': 'TextEdit', 'LKS_KCLKN': 'TextEdit', 'THN_BANG': 'TextEdit', 'THN_PENA': 'TextEdit', 'JNS_PENA': 'TextEdit', 'THN_PPJT': 'TextEdit', 'RCN_SUMBER': 'TextEdit', 'RCN_DASAR': 'TextEdit', 'RCN_PRGS': 'TextEdit', 'BUJT': 'TextEdit', 'RCN_PRKSA': 'TextEdit', 'RCN_PRGM': 'TextEdit', 'RNC_KAT': 'TextEdit', 'RCN_PRTS': 'TextEdit', 'RCN_THTRGT': 'TextEdit', 'RCN_LINTAS': 'TextEdit', 'KOORD_X_AW': 'TextEdit', 'KOORD_Y_AW': 'TextEdit', 'KOORD_X_AK': 'TextEdit', 'KOORD_Y_AK': 'TextEdit', 'FOTO': 'TextEdit', 'VIDEO': 'TextEdit', 'PETA': 'TextEdit', 'KET_LAIN': 'TextEdit', 'RCN_TOL': 'TextEdit', 'RCN_SEGMEN': 'TextEdit', 'RCN_NMRUAS': 'TextEdit', 'RCN_SHPLNG': 'TextEdit', 'RCN_IKU': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'PJG_SEDIR': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', 'CLASS': 'TextEdit', 'KET': 'TextEdit', 'LENG_WGS': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'GM_LAYER': 'TextEdit', 'ID': 'TextEdit', 'SHAPE_LE_2': 'TextEdit', 'RUAS': 'TextEdit', 'STATUS': 'TextEdit', 'PANJANG': 'TextEdit', 'TITLE': 'TextEdit', 'REMARKS': 'TextEdit', });
lyr_KawasanEkonomiKhusus_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'dasarhukum': 'TextEdit', 'lokasi': 'TextEdit', 'jeniskek': 'TextEdit', 'pengusul': 'TextEdit', 'bupp': 'TextEdit', 'remark': 'TextEdit', 'namobj': 'TextEdit', 'kutkek': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KawasanIndustri_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'namobj': 'TextEdit', 'pengelola': 'TextEdit', 'alamat': 'TextEdit', 'luas': 'TextEdit', 'fokus_ind': 'TextEdit', 'anchor_ind': 'TextEdit', 'status': 'TextEdit', 'i_prinsip': 'TextEdit', 'i_lokasi': 'TextEdit', 'iuki': 'TextEdit', 'remark': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RencumJalanKepmenPU367_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'nm_ruas': 'TextEdit', 'kd_prov': 'TextEdit', 'data_ver': 'TextEdit', 'kd_ruas': 'TextEdit', 'prov': 'TextEdit', 'panjang': 'TextEdit', 'ket': 'TextEdit', 'disclaimer': 'TextEdit', 'kode': 'TextEdit', 'Lintas': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PelabuhanUmum_6.set('fieldImages', {'objectid': 'Range', 'lat': 'TextEdit', 'lon': 'TextEdit', 'namobj': 'TextEdit', 'kode': 'TextEdit', 'fcode': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'tipe_pp': 'Range', 'nama_pp': 'TextEdit', 'alamat': 'TextEdit', 'kodepos': 'TextEdit', 'notelp': 'TextEdit', 'surel': 'TextEdit', 'sk_tap_rip': 'TextEdit', 'sk_tap_lok': 'TextEdit', 'izin_bng': 'TextEdit', 'thn_bng': 'TextEdit', 'izin_kmb': 'TextEdit', 'thn_kmb': 'TextEdit', 'izin_ops': 'TextEdit', 'thn_ops': 'TextEdit', 'aset': 'Range', 'nilai_aset': 'TextEdit', 'stat_ops': 'Range', 'klspel': 'Range', 'stat_jln': 'Range', 'kls_jln': 'Range', 'pnj_jln': 'TextEdit', 'stat_rel': 'Range', 'jml_pns': 'Range', 'tipe_opera': 'Range', 'operator': 'TextEdit', 'lintas': 'TextEdit', 'jns_kpl': 'TextEdit', 'hirrki': 'Range', 'jml_dmg': 'Range', 'pnj_dmg': 'TextEdit', 'dlm_klm': 'TextEdit', 'bbt_kapal': 'TextEdit', 'ls_lap_pmp': 'TextEdit', 'term_pnp': 'Range', 'ls_trm_pnp': 'TextEdit', 'term_ptk': 'Range', 'ls_trm_ptk': 'TextEdit', 'term_crhc': 'Range', 'ls_crhc': 'TextEdit', 'term_crhk': 'Range', 'ls_crhk': 'TextEdit', 'kap_lay_br': 'TextEdit', 'ls_gdng_l1': 'TextEdit', 'ls_gdng_gp': 'TextEdit', 'ls_gdng_sc': 'TextEdit', 'ls_gdng_fd': 'TextEdit', 'ls_gdng_bd': 'TextEdit', 'ls_gdng_cd': 'TextEdit', 'ls_gdng_b3': 'TextEdit', 'ls_gdng_en': 'TextEdit', 'jml_bunker': 'Range', 'kap_bunker': 'TextEdit', 'ls_kantor': 'TextEdit', 'ls_dag': 'TextEdit', 'kap_park': 'Range', 'ls_park': 'TextEdit', 'ls_drh_krj': 'TextEdit', 'ls_bng': 'TextEdit', 'ls_drh_k_1': 'TextEdit', 'ls_drh_kep': 'TextEdit', 'remark': 'TextEdit', });
lyr_TerminalKhusus_7.set('fieldImages', {'objectid': 'TextEdit', 'namobj': 'TextEdit', 'kode': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'fcode': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'tipe_pp': 'Range', 'nama_pp': 'TextEdit', 'alamat': 'TextEdit', 'prov': 'TextEdit', 'kabkot': 'TextEdit', 'kd_prov': 'TextEdit', 'kd_kabkot': 'TextEdit', 'alamat_pgl': 'TextEdit', 'prov_pgl': 'Range', 'kabkot_pgl': 'Range', 'kodepos': 'TextEdit', 'notelp': 'TextEdit', 'surel': 'TextEdit', 'sk_tap_lok': 'TextEdit', 'izin_bng': 'TextEdit', 'thn_bng': 'TextEdit', 'izin_kmb': 'TextEdit', 'thn_kmb': 'TextEdit', 'izin_ops': 'TextEdit', 'thn_ops': 'TextEdit', 'status': 'Range', 'stat_ops': 'Range', 'bdg_keg': 'TextEdit', 'stat_jln': 'Range', 'kls_jln': 'Range', 'pnj_jln': 'TextEdit', 'stat_rel': 'Range', 'jml_dmg': 'Range', 'pnj_dmg': 'TextEdit', 'dlm_klm': 'TextEdit', 'bbt_kapal': 'TextEdit', 'luas': 'TextEdit', 'pnbp': 'Range', 'remark': 'TextEdit', });
lyr_JalanNasionalNonTol_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'KD_RUAS': 'hidden field', 'NM_RUAS': 'no label', 'NO_RUAS': 'hidden field', 'FUNGSI': 'no label', 'KD_PROV': 'hidden field', 'KLS_JALAN': 'hidden field', 'PROVINSI': 'hidden field', 'NOTE': 'no label', 'LINTAS': 'no label', 'PJG_SK': 'hidden field', 'FUNGSI_2': 'hidden field', 'KONDISI': 'hidden field', 'TITLE': 'hidden field', 'REMARKS': 'hidden field', 'REMARK': 'hidden field', });
lyr_JalanNasionalTol_2.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'LAYER': 'hidden field', 'GM_TYPE': 'hidden field', 'ELEVATION': 'hidden field', 'OBJECTID_2': 'hidden field', 'KL_DAT_DAS': 'no label', 'NM_DAT_DAS': 'no label', 'STAT_BANG': 'no label', 'STAT_URN': 'hidden field', 'FUNGSI': 'no label', 'MENDUKUNG': 'hidden field', 'URAIAN_DUK': 'hidden field', 'STAT_DUK': 'no label', 'NM_ALIAS': 'hidden field', 'KD_KEM': 'hidden field', 'KD_UNOR': 'hidden field', 'KD_DAT_DAS': 'hidden field', 'KD_SK_RUAS': 'hidden field', 'KD_INF': 'hidden field', 'NMR_RUAS': 'hidden field', 'PULAU': 'hidden field', 'PROVINSI': 'hidden field', 'KAB_KOT': 'hidden field', 'KECAMATAN': 'hidden field', 'KEL_DESA': 'hidden field', 'TITIKPGNAW': 'hidden field', 'TITIKPGNAK': 'hidden field', 'KD_PATOK': 'hidden field', 'KM_AWAL': 'hidden field', 'KM_AKHIR': 'hidden field', 'PJG_DATAR': 'hidden field', 'PJG_MIRING': 'hidden field', 'PJG_OPRS': 'hidden field', 'PJG_TOTAL': 'hidden field', 'LBR_PKSN': 'hidden field', 'LBR_BAHU': 'hidden field', 'LBR_BADAN': 'hidden field', 'LHRT': 'hidden field', 'VCR': 'hidden field', 'WKT_TEMPUH': 'hidden field', 'TIPE_JALAN': 'hidden field', 'KAP_MST': 'hidden field', 'PRS_PKSASP': 'hidden field', 'PRS_PKSRGD': 'hidden field', 'LKS_RAMP': 'hidden field', 'LKS_SIMP': 'hidden field', 'LKS_RESTA': 'hidden field', 'LKS_JMBT': 'hidden field', 'LKS_TRWG': 'hidden field', 'LKS_KCLKN': 'hidden field', 'THN_BANG': 'hidden field', 'THN_PENA': 'hidden field', 'JNS_PENA': 'hidden field', 'THN_PPJT': 'hidden field', 'RCN_SUMBER': 'hidden field', 'RCN_DASAR': 'hidden field', 'RCN_PRGS': 'hidden field', 'BUJT': 'hidden field', 'RCN_PRKSA': 'hidden field', 'RCN_PRGM': 'hidden field', 'RNC_KAT': 'hidden field', 'RCN_PRTS': 'no label', 'RCN_THTRGT': 'no label', 'RCN_LINTAS': 'hidden field', 'KOORD_X_AW': 'hidden field', 'KOORD_Y_AW': 'hidden field', 'KOORD_X_AK': 'hidden field', 'KOORD_Y_AK': 'hidden field', 'FOTO': 'hidden field', 'VIDEO': 'hidden field', 'PETA': 'hidden field', 'KET_LAIN': 'hidden field', 'RCN_TOL': 'hidden field', 'RCN_SEGMEN': 'hidden field', 'RCN_NMRUAS': 'hidden field', 'RCN_SHPLNG': 'hidden field', 'RCN_IKU': 'hidden field', 'SHAPE_LE_1': 'hidden field', 'PJG_SEDIR': 'hidden field', 'SHAPE_LENG': 'hidden field', 'LEFT_FID': 'hidden field', 'RIGHT_FID': 'hidden field', 'CLASS': 'hidden field', 'KET': 'hidden field', 'LENG_WGS': 'hidden field', 'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'ORDE01': 'hidden field', 'ORDE02': 'hidden field', 'ORDE03': 'hidden field', 'ORDE04': 'hidden field', 'JNSRSR': 'hidden field', 'STSJRN': 'hidden field', 'WADMPR': 'hidden field', 'REMARK': 'hidden field', 'SBDATA': 'hidden field', 'GM_LAYER': 'hidden field', 'ID': 'hidden field', 'SHAPE_LE_2': 'hidden field', 'RUAS': 'hidden field', 'STATUS': 'hidden field', 'PANJANG': 'hidden field', 'TITLE': 'hidden field', 'REMARKS': 'hidden field', });
lyr_KawasanEkonomiKhusus_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'dasarhukum': 'no label', 'lokasi': 'hidden field', 'jeniskek': 'hidden field', 'pengusul': 'hidden field', 'bupp': 'hidden field', 'remark': 'hidden field', 'namobj': 'no label', 'kutkek': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_KawasanIndustri_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'fcode': 'hidden field', 'namobj': 'no label', 'pengelola': 'no label', 'alamat': 'hidden field', 'luas': 'hidden field', 'fokus_ind': 'no label', 'anchor_ind': 'no label', 'status': 'no label', 'i_prinsip': 'hidden field', 'i_lokasi': 'hidden field', 'iuki': 'hidden field', 'remark': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RencumJalanKepmenPU367_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'nm_ruas': 'no label', 'kd_prov': 'hidden field', 'data_ver': 'hidden field', 'kd_ruas': 'hidden field', 'prov': 'hidden field', 'panjang': 'hidden field', 'ket': 'hidden field', 'disclaimer': 'hidden field', 'kode': 'hidden field', 'Lintas': 'no label', 'Shape_Leng': 'hidden field', });
lyr_PelabuhanUmum_6.set('fieldLabels', {'objectid': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'namobj': 'no label', 'kode': 'hidden field', 'fcode': 'hidden field', 'srs_id': 'hidden field', 'lcode': 'hidden field', 'metadata': 'hidden field', 'tipe_pp': 'hidden field', 'nama_pp': 'no label', 'alamat': 'hidden field', 'kodepos': 'hidden field', 'notelp': 'hidden field', 'surel': 'hidden field', 'sk_tap_rip': 'hidden field', 'sk_tap_lok': 'hidden field', 'izin_bng': 'hidden field', 'thn_bng': 'hidden field', 'izin_kmb': 'hidden field', 'thn_kmb': 'hidden field', 'izin_ops': 'hidden field', 'thn_ops': 'hidden field', 'aset': 'hidden field', 'nilai_aset': 'hidden field', 'stat_ops': 'no label', 'klspel': 'hidden field', 'stat_jln': 'hidden field', 'kls_jln': 'hidden field', 'pnj_jln': 'hidden field', 'stat_rel': 'hidden field', 'jml_pns': 'hidden field', 'tipe_opera': 'hidden field', 'operator': 'hidden field', 'lintas': 'hidden field', 'jns_kpl': 'hidden field', 'hirrki': 'hidden field', 'jml_dmg': 'hidden field', 'pnj_dmg': 'hidden field', 'dlm_klm': 'hidden field', 'bbt_kapal': 'hidden field', 'ls_lap_pmp': 'hidden field', 'term_pnp': 'hidden field', 'ls_trm_pnp': 'hidden field', 'term_ptk': 'hidden field', 'ls_trm_ptk': 'hidden field', 'term_crhc': 'hidden field', 'ls_crhc': 'hidden field', 'term_crhk': 'hidden field', 'ls_crhk': 'hidden field', 'kap_lay_br': 'hidden field', 'ls_gdng_l1': 'hidden field', 'ls_gdng_gp': 'hidden field', 'ls_gdng_sc': 'hidden field', 'ls_gdng_fd': 'hidden field', 'ls_gdng_bd': 'hidden field', 'ls_gdng_cd': 'hidden field', 'ls_gdng_b3': 'hidden field', 'ls_gdng_en': 'hidden field', 'jml_bunker': 'hidden field', 'kap_bunker': 'hidden field', 'ls_kantor': 'hidden field', 'ls_dag': 'hidden field', 'kap_park': 'hidden field', 'ls_park': 'hidden field', 'ls_drh_krj': 'hidden field', 'ls_bng': 'hidden field', 'ls_drh_k_1': 'hidden field', 'ls_drh_kep': 'hidden field', 'remark': 'hidden field', });
lyr_TerminalKhusus_7.set('fieldLabels', {'objectid': 'hidden field', 'namobj': 'no label', 'kode': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'fcode': 'hidden field', 'srs_id': 'hidden field', 'lcode': 'hidden field', 'metadata': 'hidden field', 'tipe_pp': 'hidden field', 'nama_pp': 'no label', 'alamat': 'hidden field', 'prov': 'hidden field', 'kabkot': 'hidden field', 'kd_prov': 'hidden field', 'kd_kabkot': 'hidden field', 'alamat_pgl': 'hidden field', 'prov_pgl': 'hidden field', 'kabkot_pgl': 'hidden field', 'kodepos': 'hidden field', 'notelp': 'hidden field', 'surel': 'hidden field', 'sk_tap_lok': 'no label', 'izin_bng': 'hidden field', 'thn_bng': 'hidden field', 'izin_kmb': 'hidden field', 'thn_kmb': 'hidden field', 'izin_ops': 'hidden field', 'thn_ops': 'hidden field', 'status': 'hidden field', 'stat_ops': 'no label', 'bdg_keg': 'no label', 'stat_jln': 'hidden field', 'kls_jln': 'hidden field', 'pnj_jln': 'hidden field', 'stat_rel': 'hidden field', 'jml_dmg': 'hidden field', 'pnj_dmg': 'hidden field', 'dlm_klm': 'hidden field', 'bbt_kapal': 'hidden field', 'luas': 'hidden field', 'pnbp': 'hidden field', 'remark': 'hidden field', });
lyr_TerminalKhusus_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});