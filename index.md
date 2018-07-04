---
title: THAT GUY WITH THE MOHAWK | photography by j.pirro
layout: default
---
<div class="aurel_main_wrapper aurel_top_padding_no aurel_bottom_padding_no">
  <div class="aurel_container">
    <div class="aurel_content_wrapper row aurel_no_sidebar">
      <div class="aurel_content col col-12">
        <div class="aurel_tiny">
              <div class="row aurel_js_min_height aurel_bg_center_center aurel_bg_size_cover aurel_pf_fullwidth aurel_mb_40" data-src="img/concerts/01.jpg" data-min-height="100">
          </div>
          <div class="row aurel_pf_fullwidth">
            <div class="col col-12 aurel_pl_30 aurel_pr_30">
              <div class="aurel_widget_pm_albums_packery">
                <div class="aurel_widget_container">
                  <div class="aurel_front_end_display">
                    <div class="aurel_albums_packery_wrapper aurel_packery_wrapper aurel_packery_2218" data-uniqid="2218">
                      <div class="aurel_packery_inner aurel_albums_packery aurel_isotope_trigger is_packery albums_titles_show" data-setpad="30" data-perload="4">
                        <!-- Item 1 -->
                            <div class="aurel_albums_packery_item packery-item element packery-item1 anim_el anim_el2 load_anim packery_b2p aurel_isotop_el_loading natfirst_load" data-count="1">
                          <div class="aurel_inner_cont packery-item-inner" data-src="img/clipart/albums_packery/thumb-2.jpg">
                            <a href="album_grid.html" class="aurel_dp aurel_no_select">
                              <div class='slider'>
                                {% for i in (1..10) %}
                                  {% capture divclass %}slide-{{ i | prepend: '00' | slice: -2, 2 }}{% endcapture %}
                                  <div class="{{ divclass }}"></div>
                                {% endfor %}
                              </div>
                              <div class="aurel_albums_grid_content">
                                <h4 class="aurel_albums_title">Concerts</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <!-- Item 2 -->
                            <div class="aurel_albums_packery_item packery-item element packery-item2 anim_el anim_el2 load_anim packery_b2p aurel_isotop_el_loadportraits first_load" data-count="2">
                          <div class="aurel_inner_cont packery-item-inner aurel_js_bg_image" data-src="img/clipart/albums_packery/thumb-2.jpg">
                            <a href="album_masonry.html" class="aurel_dp aurel_no_select">
                              <div class="aurel_albums_grid_content">
                                <h4 class="aurel_albums_title">Events</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <!-- Item 3 -->
                            <div class="aurel_albums_packery_item packery-item element packery-item3 anim_el anim_el2 load_anim packery_b2p aurel_isotop_el_loading fashfirst_load" data-count="3">
                          <div class="aurel_inner_cont packery-item-inner aurel_js_bg_image" data-src="img/clipart/albums_packery/thumb-3.jpg">
                            <a href="album_packery.html" class="aurel_dp aurel_no_select">
                              <div class="aurel_albums_grid_content">
                                <h4 class="aurel_albums_title">Experiences</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <!-- Item 4 -->
                            <div class="aurel_albums_packery_item packery-item element packery-item4 anim_el anim_el2 load_anim packery_b2p aurel_isotop_el_loading stfirst_load" data-count="4">
                          <div class="aurel_inner_cont packery-item-inner aurel_js_bg_image" data-src="img/clipart/albums_packery/thumb-4.jpg">
                            <a href="album_kenburns.html" class="aurel_dp aurel_no_select">
                              <div class="aurel_albums_grid_content">
                                <h4 class="aurel_albums_title">Weddings</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>