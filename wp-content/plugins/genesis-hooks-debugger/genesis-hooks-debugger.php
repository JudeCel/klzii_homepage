<?php
/*
Plugin Name: Genesis Hooks Debugger
Description: Generates outlines on Genesis hooks and lists currently attached functions.
Version: 0.1
License: GPL
Author: Christian Z. Tamayo
*/

if ( ! class_exists( 'Genesis_Hooks_Debugger' ) ):

class Genesis_Hooks_Debugger {

	protected $genesis_hooks = array(
		// 'genesis_pre',
		// 'genesis_pre_framework',
		'genesis_before',
		'genesis_after',
		'genesis_before_header',
		'genesis_header',
		'genesis_after_header',
		'genesis_site_title',
		'genesis_site_description',
		'genesis_before_content_sidebar_wrap',
		'genesis_after_content_sidebar_wrap',
		// 'genesis_before_content',
		// 'genesis_after_content',
		'genesis_sidebar',
		'genesis_before_sidebar_widget_area',
		'genesis_after_sidebar_widget_area',
		// 'genesis_sidebar_alt',
		// 'genesis_before_sidebar_alt_widget_area',
		// 'genesis_after_sidebar_alt_widget_area',
		'genesis_before_footer',
		'genesis_footer',
		'genesis_after_footer',
		'genesis_before_loop',
		// 'genesis_loop',
		'genesis_after_loop',
		// 'genesis_after_endwhile',
		// 'genesis_loop_else',
		'genesis_before_entry',
		'genesis_after_entry',
		'genesis_entry_header',
		'genesis_before_entry_content',
		'genesis_entry_content',
		'genesis_after_entry_content',
		'genesis_entry_footer'
	);

	function __construct() {
		add_action( 'init', array( $this, 'init' ) );
	}

	public function init() {
		// Logged in users only with proper perms
		if( /*!is_user_logged_in() &&*/ !is_super_admin() ) return;

		// Surround hooks with outlines
		foreach ($this->genesis_hooks as $hook) {
			add_action( $hook, array( $this, 'outline_open' ), 0);
			add_action( $hook, function() {
				echo '</div>';
			}, 999);
		}

		// Enqueue Styles
		wp_enqueue_style( 'genesis-hooks-debugger-style', plugins_url('genesis-hooks-debugger.css', __FILE__) );
	}

	public function outline_open() {
		global $wp_filter;
		$filter = current_filter();
		$attachments = $this->print_attachments($wp_filter[$filter]);

		$out  = '<div class="outline">';
		$out .= '<span class="outline-text">';
			$out .= "action({$filter})";
			if($attachments)
				$out .= '<span class="outline-att">*</span>'.$attachments;
		$out .= '</span>';
		echo $out;
	}

	protected function print_attachments($attached) {
		// Disregard outline attachments
		if(isset($attached[0])) unset($attached[0]);
		if(isset($attached[999])) unset($attached[999]);
		if(empty($attached)) return;

		$out = '<div class="outline-attachments">';
		foreach ($attached as $key => $name) {
			$out .= key($name)." ({$key})<br>";
		}
		$out .= '</div>';
		return $out;
	}

} endif; // class_exists()

// initialize
new Genesis_Hooks_Debugger();
