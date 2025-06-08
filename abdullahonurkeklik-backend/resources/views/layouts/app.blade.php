    <!--=================
	    	HEADER
	=================-->
	    @include("layouts.header")
	<!--=================
	    	HEADER
	=================-->

    <!--=================
	    NAVIGATION
	=================-->
	    @include("layouts.navigation")
	<!--=================
	    NAVIGATION
	=================-->

    <!--=================
	        SIDEBAR
	=================-->
	    @include("layouts.sidebar")
	<!--=================
	        SIDEBAR
	=================-->

    <!--=================
	        CONTENT
	=================-->
        <div class="main-content">
            <section class="section">
                @yield("content")
            </section>
        </div>
	<!--=================
	        CONTENT
	=================-->

    <!--=================
	        FOOTER
	=================-->
            <footer class="main-footer">
                <div class="footer-left">
                    {!! setting("site_copy") !!} <a href="{{ setting("site_frontend_url") }}">{{ setting("site_name") }}</a>
                </div>
                <div class="footer-right">
                    2.3.0
                </div>                    
            </footer>
	    @include("layouts.footer")
	<!--=================
	        FOOTER
	=================-->