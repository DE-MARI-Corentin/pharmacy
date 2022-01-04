<script>
    import BandeauSeparateur from "$lib/pharma/BandeauSeparateur.svelte";
    import {goto} from '$app/navigation';

    function gotoDetail() {
        document.cookie = "sexeAnimal=f"
        document.cookie = "imageAnimal=images/icon_dog.png"
        document.cookie = "nomAnimal=Floda"
        document.cookie = "raceAnimal=Berger Allemand"
        document.cookie = "ageAnimal=7"
        document.cookie = "typeAnimal=chien"
        goto("details")
    }

    var Cal = function (divId) {

        //Store div id
        this.divId = divId;

        // Days of week, starting on Sunday
        this.DaysOfWeek = [
            'Dim',
            'Lun',
            'Mar',
            'Mer',
            'Jeu',
            'Ven',
            'Sam'
        ];

        // Months, stating on January
        this.Months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

        // Set the current month, year
        var d = new Date();

        this.currMonth = d.getMonth();
        this.currYear = d.getFullYear();
        this.currDay = d.getDate();

    };

    // Goes to next month
    Cal.prototype.nextMonth = function () {
        if (this.currMonth == 11) {
            this.currMonth = 0;
            this.currYear = this.currYear + 1;
        } else {
            this.currMonth = this.currMonth + 1;
        }
        this.showcurr();
    };

    // Goes to previous month
    Cal.prototype.previousMonth = function () {
        if (this.currMonth == 0) {
            this.currMonth = 11;
            this.currYear = this.currYear - 1;
        } else {
            this.currMonth = this.currMonth - 1;
        }
        this.showcurr();
    };

    // Show current month
    Cal.prototype.showcurr = function () {
        this.showMonth(this.currYear, this.currMonth);
    };

    // Show month (year, month)
    Cal.prototype.showMonth = function (y, m) {

        var d = new Date()
            // First day of the week in the selected month
            , firstDayOfMonth = new Date(y, m, 1).getDay()
            // Last day of the selected month
            , lastDateOfMonth = new Date(y, m + 1, 0).getDate()
            // Last day of the previous month
            , lastDayOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();


        var html = '<table>';

        // Write selected month and year
        html += '<thead><tr>';
        html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
        html += '</tr></thead>';


        // Write the header of the days of the week
        html += '<tr class="days">';
        for (var i = 0; i < this.DaysOfWeek.length; i++) {
            html += '<td>' + this.DaysOfWeek[i] + '</td>';
        }
        html += '</tr>';

        // Write the days
        var i = 1;
        do {

            var dow = new Date(y, m, i).getDay();

            // If Sunday, start new row
            if (dow == 0) {
                html += '<tr>';
            }
                // If not Sunday but first day of the month
            // it will write the last days from the previous month
            else if (i == 1) {
                html += '<tr>';
                var k = lastDayOfLastMonth - firstDayOfMonth + 1;
                for (var j = 0; j < firstDayOfMonth; j++) {
                    html += '<td class="not-current">' + k + '</td>';
                    k++;
                }
            }

            // Write the current day in the loop
            var chk = new Date();
            var chkY = chk.getFullYear();
            var chkM = chk.getMonth();
            if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
                html += '<td class="today">' + i + '</td>';
            } else if (chkY == 2022 && chkM == this.currMonth && i == 27) {
                html += '<td class="rdv">' + i + '</td>';
            } else {
                html += '<td class="normal">' + i + '</td>';
            }
            // If Saturday, closes the row
            if (dow == 6) {
                html += '</tr>';
            }
                // If not Saturday, but last day of the selected month
            // it will write the next few days from the next month
            else if (i == lastDateOfMonth) {
                var k = 1;
                for (dow; dow < 6; dow++) {
                    html += '<td class="not-current">' + k + '</td>';
                    k++;
                }
            }

            i++;
        } while (i <= lastDateOfMonth);

        // Closes table
        html += '</table>';

        // Write HTML to the div
        document.getElementById(this.divId).innerHTML = html;
    };

    function getId(id) {
        return document.getElementById(id);
    }

    import {onMount} from "svelte";

    onMount(() => {
        // Start calendar
        var c = new Cal("divCal");
        c.showcurr();

        // Bind next and previous button clicks
        getId('btnNext').onclick = function () {
            c.nextMonth();
        };
        getId('btnPrev').onclick = function () {
            c.previousMonth();
        };
    });
</script>

<div class="calendar-wrapper">
    <div class="flex justify-between">
        <button id="btnPrev" type="button">←</button>
        <button class="btn-blue w-48 mb-4" style="border-radius: 32px">Nouveau RDV</button>
        <button id="btnNext" type="button">→</button>
    </div>
    <div id="divCal"></div>
</div>
<BandeauSeparateur texte="Prochains Rendez-Vous"/>
<div class="w-full bg-white rounded-lg shadow-lg lg:w-1/3">
    <ul class="divide-y-2 divide-gray-400">
        <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
            <b><u>Jeudi 27 Janvier 2022 à 14H30</u></b><br>
            <div class="flex justify-between">
                <p>Rappel de vaccin pour <a on:click="{gotoDetail}">Floda</a></p>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-black-600" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
            </div>
        </li>
        <li class="p-3 hover:bg-blue-600 hover:text-blue-200">
            <b><u>Template 1</u></b><br>
            <div class="flex justify-between">
                <p>Template 1 pour <a href="">X</a></p>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-black-600" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
            </div>
        </li>
    </ul>
</div>


