<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'klzii_t');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('FS_METHOD','direct');

define('WP_HOME','http://klzii.localhost');
define('WP_SITEURL','http://klzii.localhost');
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'XcI=]8D:A20WVph&iD]8SLd0I;nz9I>,M4{hG}i&/%K2Ul.o8:* l|:LwC{$mueF');
define('SECURE_AUTH_KEY',  '_ Um#K|V=}7@3INq+m7,.~#37(Q1E2M8ua;97zh_=AE3W|j!YS9ci%3n9d]S+d_e');
define('LOGGED_IN_KEY',    'E[y9Xhi{ cK+L`qqaUqL=LU]:t,[1V.K&:tB`Fh~ky<=O/AXFW62{7ggk;$?  3,');
define('NONCE_KEY',        'unc3vl<%3r/vl3Lce|QPw/mT/}zclU4*E^%s~x`e.hL2ZF:,Iobj8W(?(jF+{4cF');
define('AUTH_SALT',        'yyh#IT2Bj-*Ns3y0,-R9gC/ti:@O$`+FMd[>N6KT_0363hzuGS(wHdmJ|<FK60)(');
define('SECURE_AUTH_SALT', '$f}kMXib;e2dAWCl>NO#3Y;qQ)Af5l:]H4$8u10@m}E^vC.fOaI]HxrJSOZA7ILV');
define('LOGGED_IN_SALT',   'V@]R>Lsu;E8Fh3)/&?%,>-hDv5u?P.=39.i|5|4!=ZO^mw>n1DG^3E,H|~+=sX:p');
define('NONCE_SALT',       '<1>B-RU<CK -GRZh7{H,C}vcaL{-pXSFQJmF$1[OX>CWU7yr*$XtzmMw0i9#z3]|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
