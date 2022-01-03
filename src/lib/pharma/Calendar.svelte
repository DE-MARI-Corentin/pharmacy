<script context="module">
    const cal = el =>
    {
        // Start calendar
        var c = new Cal("divCal");			
        c.showcurr();

        // Bind next and previous button clicks
        getId('btnNext').onclick = function() {
            c.nextMonth();
        };
        getId('btnPrev').onclick = function() {
            c.previousMonth();
        };
    }
</script>

<div class="calendar-wrapper">
    <button id="btnPrev" type="button">←</button>
    <button id="btnNext" type="button">→</button>
    <div id="divCal"></div>
</div>

<svelte:head>
  <link rel="stylesheet" href="src/lib/calendar/css/style.css">
  <script src="src/lib/calendar/js/script.js" use:cal></script>
</svelte:head>