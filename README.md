=== BoltAudit ===
Contributors: boltbrains
Tags: audit, performance, optimization, database, plugins, security
Requires at least: 5.0
Tested up to: 6.4
Stable tag: 0.0.3
Requires PHP: 7.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Homepage: https://github.com/boltbrains/boltaudit

== Description ==
BoltAudit is a no-fluff WordPress plugin audit tool for developers, agencies, and site owners.  
Quickly identify bloated, unused, outdated, or abandoned plugins.  
Uncover database bloat, autoloaded options, excessive post metadata, and server misconfigurations—all from one clean dashboard.

== Installation ==
1. Upload the `boltaudit` folder to `/wp-content/plugins/`.  
2. Activate “BoltAudit” through the ‘Plugins’ menu in WordPress.  
3. Navigate to **Tools → BoltAudit** to run your first audit.  
4. Review the Plugin Audit, Database Report, and Environment sections to pinpoint issues.

== Frequently Asked Questions ==
= What does “abandoned plugin” mean? =
BoltAudit flags plugins without recent updates or with high support‐forum inactivity, which often indicates abandonment.

= How often should I run an audit? =
We recommend running BoltAudit after any major update or at least monthly to catch new issues.

= Will it break my site? =
No. BoltAudit reads data but does not deactivate or delete anything. All actions are manual.

= Does it integrate with PageSpeed Insights? =
Not in beta, but future releases will offer optional PageSpeed Insights integration.

== Changelog ==
= 0.0.3 – 2025-07-13 =
* Added full Plugin Audit section to detect inactive, outdated, or abandoned plugins  
* Warnings for unused or risky plugins  
* Improved environment and database reporting  
* UI refinements and performance improvements

= 0.0.2 – 2025-07-05 =
* Enhanced autoloaded options breakdown  
* Added post metadata issue detection  
* Minor bug fixes and code optimizations

= 0.0.1 – 2025-06-15 =
* Initial beta release  
* Basic plugin audit and database size reporting  

== Upgrade Notice ==
### 0.0.3
New Plugin Audit section and environment reporting.

=== BoltAudit ===
