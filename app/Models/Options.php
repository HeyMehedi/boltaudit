<?php

defined( 'ABSPATH' ) || exit;


namespace BoltAudit\App\Models;

use BoltAudit\WpMVC\App;
use BoltAudit\WpMVC\Database\Eloquent\Model;
use BoltAudit\WpMVC\Database\Resolver;

class Options extends Model
{
    public static function get_table_name(): string
    {
        return 'boltaudit_options';
    }

    public function resolver(): Resolver
    {
        return App::$container->get(Resolver::class);
    }
}
