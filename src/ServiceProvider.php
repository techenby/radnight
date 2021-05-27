<?php

namespace Andymnewhouse\Radnight;

use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $stylesheets = [
        __DIR__.'/../dist/css/radnight.css'
    ];

    protected $publishables = [
        __DIR__.'/../dist/img' => 'img',
    ];
}
