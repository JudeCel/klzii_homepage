<?php

add_action('admin_menu', 'diatom_add_custom_settings');
add_action('template_redirect', 'diatom_redirect_to_currency_pages');
wp_enqueue_script('custom-redirect', get_stylesheet_directory_uri() . '/js/custom-redirect.js', array('jquery'), null, false);

function diatom_add_custom_settings()
{
    add_submenu_page(
        'options-general.php',
        'Redirect to currency pages settings',
        'Redirect to currency pages',
        'manage_options',
        'redirect-to-currency-pages-settings-slug',
        function () {
            echo '<div class="wrap">';
            echo '<h2>' . get_admin_page_title() . '</h2>';
            echo '<form method="post" action="options.php">';
            settings_fields("currency_redirect_option_group_section");
            do_settings_sections("redirect-to-currency-pages-settings-slug");
            submit_button();
            echo '</form>';
            echo '</div>';
        }
    );

    diatom_display_custom_settings_fields();
}

function diatom_display_custom_settings_fields()
{
    register_setting("currency_redirect_option_group_section", "nzd_page_id");
    register_setting("currency_redirect_option_group_section", "usd_page_id");

    add_settings_section("currency_redirect_option_group_section", "", null, "redirect-to-currency-pages-settings-slug");
    add_settings_field("nzd-page-id", "Set NZD currency page id", 'display_nzd_settings', "redirect-to-currency-pages-settings-slug", 'currency_redirect_option_group_section');
    add_settings_field("usd-page-id", "Set USD currency page id", 'display_usd_settings', "redirect-to-currency-pages-settings-slug", 'currency_redirect_option_group_section');
}

function display_nzd_settings()
{
    ?>
    <input type="text" name="nzd_page_id" id="nzd-page-id" value="<?php echo get_option('nzd_page_id'); ?>"/>
    <?php
}

function display_usd_settings()
{
    ?>
    <input type="text" name="usd_page_id" id="usd-page-id" value="<?php echo get_option('usd_page_id'); ?>"/>
    <?php
}

function diatom_redirect_to_currency_pages()
{
    $usd = get_option('usd_page_id');
    $nzd = get_option('nzd_page_id');

    global $post;

    $field = get_post_meta($post->ID, 'price-redirect', true);
    $country_iso = do_shortcode("[geoip_detect2 property=\"country.isoCode\"]");

    if ($field === 'true') {
        if ($country_iso == 'NZ') {
            wp_redirect(get_permalink($nzd), 301);
        } else {
            wp_redirect(get_permalink($usd), 301);
        }
    };
}

function js_variables()
{
    $variables = array(
        'ajax_url' => admin_url('admin-ajax.php')
    );

    echo(
        '<script type="text/javascript">window.wp_data = ' .
        json_encode($variables) .
        '</script>');
}

add_action('wp_head', 'js_variables');

add_action('wp_ajax_get_redirect_url', 'get_prices_redirect_url');
add_action('wp_ajax_nopriv_get_redirect_url', 'get_prices_redirect_url');

function get_prices_redirect_url()
{
    switch ($_REQUEST['trgt']) {
        case 'USA':
            echo(get_permalink(get_option('usd_page_id')));
            break;
        case 'NZD':
            echo(get_permalink(get_option('nzd_page_id')));
            break;
    }
    wp_die();
}