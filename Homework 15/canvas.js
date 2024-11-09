const data = [
    {title: 'javascript',  amount: 150000 },
    { title: 'python',  amount: 140000 },
    { title: 'golang', amount: 130000 },
    { title: 'java', amount: 120000 }];

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const barHeight = 40;
    const barGap = 20;
    const chartLeftMargin = 100;
    const chartTopMargin = 50;
    const maxAmount = Math.max(...data.map(item => item.amount));
    const chartWidth = canvas.width - chartLeftMargin - 20;

    
       data.forEach((item, index) => {
        const barWidth = (item.amount / maxAmount) * chartWidth;
        const barY = chartTopMargin + index * (barHeight + barGap);


        ctx.fillStyle = ["#ffcc66", "#66b2ff", "#99cc99", "#ff6666"][index];
        ctx.fillRect(chartLeftMargin, barY, barWidth, barHeight);


     ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(item.title, 7, barY + barHeight / 2 + 4);

        ctx.fillStyle = "#000";
        ctx.fillText(item.amount, chartLeftMargin + barWidth + 7, barY + barHeight / 2 + 4);
    });

     
   
