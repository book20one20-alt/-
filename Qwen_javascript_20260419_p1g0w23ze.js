    // ✅ Time Distribution (مصحح)
    var colorMap = {
        'Work': '#22c55e', 
        'Development': '#eab308', 
        'Personal': '#a855f7', 
        'Rest': '#3b82f6', 
        'Waste': '#ef4444'
    };
    var cats = [
        {n:'Work', m:work}, {n:'Development', m:dev}, 
        {n:'Personal', m:personal}, {n:'Rest', m:rest}, 
        {n:'Waste', m:waste}
    ].filter(function(c){ return c.m > 0; });

    var bhtml = '';
    if (cats.length === 0) {
        bhtml = '<p class="text-gray" style="color:#6b7280;">No data to display</p>';
    } else {
        for (var i=0; i<cats.length; i++) {
            var p = total > 0 ? Math.round((cats[i].m / total) * 100) : 0;
            var h = (cats[i].m / 60).toFixed(1);
            var bgColor = colorMap[cats[i].n] || '#6b7280';
            
            bhtml += '<div style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">';
            bhtml += '<span style="width:95px; font-size:13px; color:#d1d5db;">' + cats[i].n + '</span>';
            bhtml += '<div style="flex:1; height:8px; background:#1f2937; border-radius:4px; overflow:hidden;">';
            bhtml += '<div style="height:100%; width:' + p + '%; background:' + bgColor + '; border-radius:4px; transition:width 0.8s;"></div></div>';
            bhtml += '<span style="width:45px; font-size:11px; color:#6b7280; text-align:right;">' + h + 'h</span>';
            bhtml += '<span style="width:35px; font-size:11px; color:#6b7280; text-align:right;">' + p + '%</span>';
            bhtml += '</div>';
        }
    }
    document.getElementById('catBreak').innerHTML = bhtml;