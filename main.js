

/**
 * Simple CSS based ticker with data feed populated through JSON and Javascript
 * Future update would move the JSON to external server and use an AJAX request.
 * For the purposes of this demo, person external servers will not be used and
 * public access to API or AWS bucket were not provided. 
 *
 * @category   Demo
 * @package    Sports Ticker
 * @author     James McCarthy <james@jmgalleries.com>
 * @copyright  2019 James McCarthy
 * @license    GNU GENERAL PUBLIC LICENSE
 * @version    0.1
 * @since      function available since Release 0.1   
 * @created    October 18, 2019   
 * 
 * @USAGE   
 * a single onBody call to API_get_ticket() is all that is needed. 
 * To change speed, adjust inside the CSS classes .ticker--mlb span, .ticker--nfl span
 */



function API_get_ticker(data_feed) {
    
    /* check to see if data feed is provided */
    data_feed = data_feed === undefined ? 'data' : data_feed;
    console.log('API_get_ticker / ' + data_feed);

    var ticker_vals_MLB = "MLB: ";
    var ticker_vals_NFL = "NFL: ";
    var mydata = null;

    /* In an AJAX environment, these would instead build alternate API URIs */
    if(data_feed == 'data') {
        data = '[{"id":5,"name":"MLB","provider_value":"sr:tournament:109","matches":[{"id":20599,"name":"Pittsburgh Pirates VS Philadelphia Phillies","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"PHI","away_abbreviation":"PIT","odds":{"home_ml":-147,"favourite_team":"PHI","spread":"1.5","total":"10","away_ml":"+125"}},{"id":20610,"name":"Baltimore Orioles VS Washington Nationals","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"WSH","away_abbreviation":"BAL","odds":{"total":"9.5","home_ml":-333,"favourite_team":"WSH","spread":"1.5","away_ml":"+265"}},{"id":20601,"name":"Chicago Cubs VS New York Mets","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"NYM","away_abbreviation":"CHC","odds":{"total":"8","away_ml":-116,"favourite_team":"CHC","spread":"1.5","home_ml":-105}},{"id":20604,"name":"Cleveland Indians VS Detroit Tigers","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"DET","away_abbreviation":"CLE","odds":{"favourite_team":"CLE","spread":"1.5","total":"9.5","home_ml":"+145","away_ml":-167}},{"id":20600,"name":"Cincinnati Reds VS Miami Marlins","schedule":"2019-08-27T23:10:00+00:00","home_abbreviation":"MIA","away_abbreviation":"CIN","odds":{"total":"7","away_ml":-161,"favourite_team":"CIN","spread":"1.5","home_ml":"+140"}}]},{"id":1,"name":"NFL","provider_value":"sr:tournament:233","matches":[{"id":20426,"name":"Pittsburgh Steelers VS Carolina Panthers","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CAR","away_abbreviation":"PIT","odds":{"total":"33","home_ml":"+155","away_ml":-175,"favourite_team":"PIT","spread":"3.5"}},{"id":20429,"name":"Philadelphia Eagles VS New York Jets","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"NYJ","away_abbreviation":"PHI","odds":{"favourite_team":"NYJ","spread":"4","total":"35","home_ml":-200,"away_ml":"+170"}},{"id":20430,"name":"Atlanta Falcons VS Jacksonville Jaguars","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"JAC","away_abbreviation":"ATL","odds":{"home_ml":-200,"total":"32","away_ml":"+170","favourite_team":"JAC","spread":"4"}},{"id":20428,"name":"Indianapolis Colts VS Cincinnati Bengals","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"CIN","away_abbreviation":"IND","odds":{"favourite_team":"CIN","spread":"3","total":"33.5","home_ml":-156,"away_ml":"+135"}},{"id":20427,"name":"Minnesota Vikings VS Buffalo Bills","schedule":"2019-08-29T23:00:00+00:00","home_abbreviation":"BUF","away_abbreviation":"MIN","odds":{"home_ml":"+135","total":"35","away_ml":-156,"favourite_team":"MIN","spread":"3"}}]}]';
    } else {
        data = '[{"id":6,"name":"NFL","provider_value":"sr:tournament:109","matches":[{"id":20599,"name":"Boston Red Sox VS New York Yankees","schedule":"2019-08-27T23:05:00+00:00","home_abbreviation":"BOS","away_abbreviation":"NYY","odds":{"home_ml":-147,"favourite_team":"BOS","spread":"1.5","total":"10","away_ml":"+125"}},{"id":20610,"name":"Oakland A\'s VS Boston Red Sox","schedule":"2019 - 08 - 27T23: 05: 00 + 00: 00","home_abbreviation":"OAK","away_abbreviation":"BOS","odds":{"total":"9.5","home_ml":-333,"favourite_team":"BOS","spread":"1.5","away_ml":" + 265"}}]},{"id":1,"name":"NFL","provider_value":"sr: tournament: 233","matches":[{"id":20426,"name":"Las Vegas Raiders VS Carolina Panthers","schedule":"2019 - 08 - 29T23: 00: 00 + 00: 00","home_abbreviation":"CAR","away_abbreviation":"LAS","odds":{"total":"33","home_ml":" + 155","away_ml":-175,"favourite_team":"LAS","spread":"3.5"}},{"id":20429,"name":"Denver Broncos VS New England Patroits","schedule":"2019 - 08 - 29T23: 00: 00 + 00: 00","home_abbreviation":"DEN","away_abbreviation":"PAT","odds":{"favourite_team":"PAT","spread":"4","total":"35","home_ml":-200,"away_ml":" + 170"}}]}]';
        console.log('data_2: ' . data);
    }

    /* Parse the JSON data into an object */
    mydata = JSON.parse(data);

    /* MLB */
    for (x=0 ; x < mydata[0].matches.length; x++) {
        ticker_vals_MLB += mydata[0].matches[x].name + ' / Spread: ' + mydata[0].matches[x].odds.spread + ' / Fav ' + mydata[0].matches[x].odds.favourite_team + ' &mdash; ';
    }
        console.log(ticker_vals_MLB);
        $('.ticker--mlb span').html(ticker_vals_MLB);

    /* NFL */
    for (x=0 ; x < mydata[1].matches.length; x++) {
        ticker_vals_NFL += mydata[1].matches[x].name + ' / Spread' + mydata[1].matches[x].odds.spread + ' / Fav ' + mydata[1].matches[x].odds.favourite_team + ' &mdash; ';
    }
        console.log(ticker_vals_NFL);
        $('.ticker--nfl span').html(ticker_vals_NFL);
}