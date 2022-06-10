let lyricArray = [
    'อยากให้เธอลองรัก เหมือนครั้งแรกที่เธอได้พบรัก','โปรดรักฉันรักฉันเถอะนะ จะไม่ทำให้เธอเสียใจ','จิตใจทำด้วยอะไร เหตุใดจึงไม่รักกัน','คงจะมีรักจริงรออยู่ ที่ดินแดนใดสักแห่ง','ไม่ว่ากี่เหตุผลที่เธอบอก ไม่ว่ากี่คำพูดที่เธอคอยอธิบาย', 'Oh ma boy oh ma boy baby'
    ]; 
    
    let randomButton = document.getElementById('random');
    let output = document.getElementById('output');
    
    randomButton.addEventListener('click', () => {
        let n = lyricArray.length;
        let index = Math.floor(Math.random()*n);
        let lyric = lyricArray[index];
        output.innerHTML = lyric;
    })