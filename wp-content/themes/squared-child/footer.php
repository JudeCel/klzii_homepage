<?php tha_content_bottom(); ?>
<?php
$options        = thrive_get_options_for_post( get_the_ID() );
$active_footers = _thrive_get_footer_active_widget_areas();

$f_class  = _thrive_get_footer_col_class( count( $active_footers ) );
$num_cols = count( $active_footers );
?>
</div>
</div> <!-- Close the wrapper div -->

<?php
if ( ( is_single() || is_page() ) && thrive_check_bottom_focus_area() ):
	thrive_render_top_focus_area( "bottom" );
endif;
?>

<?php tha_content_after(); ?>
<?php tha_footer_before(); ?>
<footer>
	<?php tha_footer_top(); ?>
	<div class="ftw">
		<div class="wrp">
			<?php
			$num = 0;
			foreach ( $active_footers as $name ):
				$num ++;
				?>
				<div class="<?php echo $f_class; echo $name;?> <?php echo ( $num == $num_cols ) ? 'lst' : ''; ?>">
					<?php dynamic_sidebar( $name ); ?>
				</div>
			<?php endforeach; ?>
			<div class="clear"></div>
		</div>
	</div>

	<?php tha_footer_bottom(); ?>
</footer>
<?php tha_footer_after(); ?>

<?php if ( isset( $options['analytics_body_script'] ) && $options['analytics_body_script'] != "" ): ?>
	<?php echo $options['analytics_body_script']; ?>
<?php endif; ?>
<style type="text/css">
	.all-post .short-item{
		    width: 47%;
    float: left;
    margin-right: 3%;
    margin-bottom: 3%;
	}
.all-post .img a{
		display: block;
		height: 185px;
		overflow: hidden;
	}
	.all-post .img a img{
		height: auto;
	}
.short-content{
		background-image: linear-gradient(rgb(249, 249, 249), rgb(249, 249, 249)) !important;
    	padding: 15px 15px 30px 15px;
	}
	.short-content .title-h5{
		margin-top: 0;
min-height: 120px;
	}
.short-content .title-h5 a{
		color: rgb(51, 51, 51) !important;
    	font-size: 30px;
	}
p.excerpt {
    min-height: 165px;
}
	.tve_shortcode_rendered > h2{
		font-size: 40px;
	    color: rgb(51, 51, 51);
	    font-weight: 600;
	}
	.read-more{
		border-radius: 8px;
	    background-color: rgb(244, 82, 77);
	    color: #fff !important;
	    padding: 10px 20px;
	}
.single-left{
		width: 64.6666666%;
float: left;
padding-right: 2%;
	}
	.single-right{
		width: 31.33333333%;
float: left;
    padding-top: 55px;
padding-left: 2%;
	}
.title-bg.bg-odd {
    background-image: linear-gradient(rgb(54, 167, 218), rgb(54, 167, 218)) !important;
    background-size: auto !important;
    background-position: 0px 0px !important;
    background-attachment: scroll !important;
    background-repeat: no-repeat !important;
    text-align: center;
    padding: 20px;
}
.title-bg.bg-odd br{display: none;}
.conten-box {
    border: 1px solid rgba(0, 0, 0, 0.19);
    padding: 10px 20px;
    border-top: none;
    text-align: right;
}
.title-bg.bg-even br {
    display: none;
}
.title-bg.bg-even {
    background-image: linear-gradient(rgb(167, 66, 158), rgb(167, 66, 158)) !important;
    background-size: auto !important;
    background-position: 0px 0px !important;
    background-attachment: scroll !important;
    background-repeat: no-repeat !important;
    text-align: center;
    padding: 20px;
}
.conten-box.content-odd {
    border-bottom: 3px solid #36a7da;
}
.conten-box.content-even {
    border-bottom: 3px solid #a7429e;
}
@media screen and (max-width: 1080px){
		.all-post .short-item {
		    width: 100%;
		    margin-right: 0;
		}
		.all-post .img a{height: auto;}
		.short-content .title-h5{min-height: auto;}
		p.excerpt {
		    min-height: auto;
		}
.all-post .img a img{width: 100%;}
	}
.main-category {
    width: 100%;
    float: left;
    margin: 40px 0;
}
.category-left {
    width: 66%;
    float: left;
}
.category-right {
    width: 32%;
    float: left;
    padding-left: 2%;
}
.box {
    margin-bottom: 35px;
}
.single .alignnone{margin: 0;}
@media screen and (max-width: 992px){
	.single-left,.single-right,.category-left,.category-right{
	width: 100% !important;
padding-left: 0;
	}
	.read-more{
	display: inline-block;
   	 margin-top: 20px;
	}
}
</style>
<?php wp_footer(); ?>
<?php tha_body_bottom(); ?>
</body>
</html>