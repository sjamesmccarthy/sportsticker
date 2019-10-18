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
 * @license    http://www.php.net/license/3_01.txt  PHP License 3.01
 * @version    0.1
 * @since      function available since Release 0.1   
 * @created    October 18, 2019   
 * 
 * @USAGE   
 * a single onBody call to API_get_ticket() is all that is needed. 
 * To change speed, adjust inside the CSS classes .ticker--mlb span, .ticker--nfl span
 */