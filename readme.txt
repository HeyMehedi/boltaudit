=== BoltAudit – Plugin & Performance Analyzer ===
Contributors: heymehedi
Tags: performance, audit, plugins, database, optimization, site health
Requires at least: 5.8
Tested up to: 6.8
Requires PHP: 7.4
Stable tag: 0.0.1
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A no-fluff WordPress plugin audit tool. BoltAudit helps you identify bloated, unused, abandoned, and performance-heavy plugins—plus database bloat, autoloaded options, and runtime impact.

== Description ==

**BoltAudit gives you a clear, actionable overview of what’s slowing down your WordPress site.**

It inspects:
- Active plugins and their actual impact on performance
- Unused, abandoned, or rarely-used plugins
- Heavy scripts, enqueued styles, database queries, and metadata
- Autoloaded options, transients, and custom DB tables
- Server environment and PHP configuration

Whether you're a developer, site owner, or agency, BoltAudit gives you visibility into bottlenecks with zero guesswork.

== Features ==

- 🔍 Detects unused and abandoned plugins
- 📊 Visual impact report per plugin (load time, DB usage, asset weight)
- 🧠 Breaks down post types, metadata, revisions, and orphaned content
- 🗃️ Analyzes option tables, autoloaded data, transients, and more
- 🌐 Shows environment data: PHP, memory limits, upload size, etc.
- ⚙️ Designed for devs, site maintainers, and performance-obsessed pros

== Screenshots ==

1. Plugin impact breakdown
2. Post type + metadata overview
3. Database insights and bloat report
4. Server and WordPress configuration
5. Abandonment and usage detection

== Installation ==

1. Upload the plugin to `/wp-content/plugins/boltaudit/` or install via Plugins → Add New.
2. Activate the plugin.
3. Go to **Tools → BoltAudit** to begin your audit.

== Frequently Asked Questions ==

= Does BoltAudit slow down my site? =  
No. BoltAudit is designed to run lightweight diagnostics without affecting front-end performance. Most tasks run only on-demand.

= Can it delete plugins or data? =  
Not by default. BoltAudit gives you insights—you decide what to remove or clean up.

= Will this work with WooCommerce and other large plugins? =  
Yes. BoltAudit was built with heavy-duty sites in mind, including eCommerce, LMS, and community plugins.

== Changelog ==

= 0.0.1(beta) =
* Initial release: post type analyzer, & environment report.