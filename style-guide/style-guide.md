---
layout: page
title: style-guide
permalink: /style-guide/
---

**Index:**

- [Basic Display of Image and Video](#basic-display-of-image-and-video-legacy)
  - [Full-Width Image](#full-width-image)
  - [Image Grid](#image-grid)
  - [Video Example](#video-example)
- [Image Cards](#image-cards)
  - [Standard Image Card](#standard-image-card)
  - [Clickable Image Card](#clickable-image-card-full-size-view)
- [Image Card Grids](#photo-grid-layouts)
  - [2x3 Grid](#2x3-photo-grid)
  - [2x1 Grid (Image and Video)](#2x1-photo-grid-image-and-video)
  - [3x Grid of Clickable Image Cards](#3x-grid-of-clickable-image-cards)
- [Tables](#tables)
  - [Responsive Table](#responsive-table)
  - [Centered Ticks Table](#centered-ticks-table)
- [Post Navigation](#post-navigation)
- [Notes and Tips](#notes-and-tips)
- [Typography](#typography)
- [Print Styles](#print-styles)
- [Google Maps](#google-maps)

<hr>

## Basic Display of Image and Video (legacy)

### Full-Width Image

**Example:**

<figure>
    <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit_sml600.png" alt="Full-width image example">
    <figcaption>Full-width image example</figcaption>
</figure>

**Usage:**

To display an image that spans the full width of its parent container, simply use the standard `<img>` tag within a `<figure>` element (optional for the caption). No specific classes are required for this basic full-width behavior.

### Image Grid

**Example:**

<div class="image-grid">
  <figure>
    <img src="/assets/images/25_03/138A3229.jpg" alt="Example image 1">
    <figcaption>Image 1</figcaption>
  </figure>
  <figure>
    <img src="/assets/images/25_03/138A3293.jpg" alt="Example image 2">
    <figcaption>Image 2</figcaption>
  </figure>
  <figure>
    <img src="/assets/images/25_03/138A3374.jpg" alt="Example image 3">
    <figcaption>Image 3</figcaption>
  </figure>
</div>
<br>
**Usage:**

Create a flexible grid of images by wrapping your `<figure>` elements (containing `<img>` and optional `<figcaption>`) within a `div` with the class `.image-grid`. The grid will automatically arrange the images based on the available space.

**Key Attributes (CSS):**

* `.image-grid`:
    * `display: grid`: Enables the grid layout.
    * `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))`: Creates columns that automatically adjust, with a minimum width of 150px.
    * `gap: 10px`: Sets the spacing between grid items.
* `.image-grid img`:
    * `width: 100%`: Ensures images fill their container width.
    * `max-width: 200px`: Ensures images within the grid have a maximum width of 200px.

### Video Example

**Example:**

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/PmEsczIhK4I" frameborder="0" allowfullscreen></iframe>
</div>

**Usage:**

To embed a responsive video that maintains its aspect ratio, wrap your `<iframe>` element within a `div` with the class `.video-wrapper`.

**Key Attributes (CSS):**

* `.video-wrapper`:
    * `position: relative`: Sets the container as a reference for absolute positioning of the iframe.
    * `padding-bottom: 56.25%`: Creates a 16:9 aspect ratio.
    * `height: 0`: Collapses the container's inherent height.
    * `overflow: hidden`: Hides parts of the iframe that might extend beyond the container.
    * `margin: 1rem 0`: Adds vertical spacing around the video wrapper.
    * `width: 100%`: Makes the video wrapper take up the full width of its container.
* `.video-wrapper iframe`:
    * `position: absolute`: Allows precise positioning within the wrapper.
    * `top: 0`, `left: 0`: Positions the iframe at the top-left of the wrapper.
    * `width: 100% !important`, `height: 100% !important`: Makes the iframe fill the wrapper.
    * `border: 0`: Removes the default iframe border.
    * `display: block`: Prevents extra spacing around the iframe.

<hr> 

## Image Cards

Image cards are used to present images with optional captions, wrapped in a styled card container. You can align them left (default), centre, or right using classes on the wrapper.

### Standard Image Card

**Example (Left-aligned by default):**

<div class="image-card-wrapper">
  <figure class="media-card">
    <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit_sml600.png" alt="Example image">
    <figcaption>Standard image card with caption</figcaption>
  </figure>
</div>

<div style="clear: both;"></div>

**Center-aligned:**

<div class="image-card-wrapper center">
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3531.jpg" alt="Centered image card">
    <figcaption>Centered image card</figcaption>
  </figure>
</div>

**Right-aligned:**

<div class="image-card-wrapper right">
  <figure class="media-card">
    <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit_sml600.png" alt="Right-aligned image card">
    <figcaption>Right-aligned image card</figcaption>
  </figure>
</div>
<div style="clear: both;"></div>

**How to Use:**

Wrap your `<figure class="media-card">` inside a `<div class="image-card-wrapper">`. Add the class `.right` to float the image right, or use a flex container to center it. Left-aligned is default.

<details>
  <summary>See example code</summary>
  <div class="code-example">
    <pre><code class="language-html">
&lt;div class="image-card-wrapper right"&gt;
  &lt;figure class="media-card"&gt;
    &lt;img src="/assets/images/25_04/10th_greenNoiseRemoved_edit_sml600.png" alt="Right-aligned image card"&gt;
    &lt;figcaption&gt;Right-aligned image card&lt;/figcaption&gt;
  &lt;/figure&gt;
&lt;/div&gt;
    </code></pre>
  </div>
</details>
<br>

### Clickable Image Card (Full-size view)

**Example:**

<div class="image-card-wrapper">
  <a href="/assets/images/25_04/psd r_r_250330_05_stacked.psd screenshot.png" target="_blank" class="image-card-clickable">
    <figure class="media-card">
      <img src="/assets/images/25_04/psd r_r_250330_05_stacked.psd_screenshot_sml.png" alt="Image of Orion Nebula with settings below">
      <figcaption>Click to view full size 🔍</figcaption>
    </figure>
  </a>
</div>
<div style="clear: both;"></div>

**Usage:**

To create a fully clickable image card with a zoom-on-hover effect, wrap the entire `<figure class="media-card">` inside an `<a>` tag and apply the class `.image-card-clickable` to that anchor. This ensures both the image and caption are clickable, and enables a hover animation for interactive feedback. Add a 🔍 icon to the caption to indicate that a full-size image is available.

<details>
  <summary>See example code</summary>
  <div class="code-example">
    <pre><code class="language-html">
&lt;div class="image-card-wrapper"&gt;
  &lt;a href="/assets/images/fullsize.jpg" target="_blank" class="image-card-clickable"&gt;
    &lt;figure class="media-card"&gt;
      &lt;img src="/assets/images/thumb.jpg" alt="Image with caption"&gt;
      &lt;figcaption&gt;Click to view full size 🔍&lt;/figcaption&gt;
    &lt;/figure&gt;
  &lt;/a&gt;
&lt;/div&gt;
    </code></pre>
  </div>
</details>
<br>

### Clickable Video Card (Lightbox-style Video)

**Example:**

<div class="image-card-wrapper">
  <a href="https://www.youtube.com/watch?v=PmEsczIhK4I" class="image-card-clickable glightbox" data-gallery="trip-videos">
    <figure class="media-card">
      <img src="/assets/images/video-placeholder.jpg" alt="Video thumbnail">
      <figcaption>Watch the video 🔍</figcaption>
    </figure>
  </a>
</div>
<div style="clear: both;"></div>

**Usage:**

To create a video thumbnail that opens in a lightbox (rather than embedding directly), wrap the card in an anchor tag with:
- `href` pointing to the YouTube or Vimeo video link
- `class="image-card-clickable glightbox"` to enable lightbox functionality
- `data-gallery="..."` to group videos, if desired

This behaves exactly like a clickable image card, but the link targets a video and GLightbox will handle the embedding. The `<img>` inside the `<figure>` is a thumbnail or preview image for the video.

<details>
  <summary>See example code</summary>
  <div class="code-example">
    <pre><code class="language-html">
&lt;div class="image-card-wrapper"&gt;
  &lt;a href="https://www.youtube.com/watch?v=PmEsczIhK4I" class="image-card-clickable glightbox" data-gallery="trip-videos"&gt;
    &lt;figure class="media-card"&gt;
      &lt;img src="/assets/images/video-placeholder.jpg" alt="Video thumbnail"&gt;
      &lt;figcaption&gt;Watch the video 🔍&lt;/figcaption&gt;
    &lt;/figure&gt;
  &lt;/a&gt;
&lt;/div&gt;
    </code></pre>
  </div>
</details>

## Photo Grid Layouts

### 2x3 Photo Grid

**Example:**

<div class="photo-grid">
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3229.jpg" alt="Example image 1">
    <figcaption>Example image 1</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3293.jpg" alt="Example image 2">
    <figcaption>Example image 2</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3374.jpg" alt="Example image 3">
    <figcaption>Example image 3</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3450.jpg" alt="Example image 4">
    <figcaption>Example image 4</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3531.jpg" alt="Example image 5">
    <figcaption>Example image 5</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3531.jpg" alt="Example image 6">
    <figcaption>Example image 6</figcaption>
  </figure>
</div>

**Usage:**

Create a 2x3 grid of media items by wrapping six `<figure>` elements within a `div` with the class `.photo-grid`. For image content, each `<figure>` should also include the `.media-card` class to apply the standard image card styling. This layout is responsive and adapts to smaller screens.

<details>
  <summary>See example code</summary>
  <div class="code-example">
    <pre><code class="language-html">
&lt;div class="photo-grid"&gt;
  &lt;figure class="media-card"&gt;
    &lt;img src="/assets/images/example.jpg" alt="Example image 1"&gt;
    &lt;figcaption&gt;Example image 1&lt;/figcaption&gt;
  &lt;/figure&gt;
  &lt;!-- Repeat 5 more times --&gt;
&lt;/div&gt;
    </code></pre>
  </div>
</details>
<br>

**Key Attributes (CSS):**

* `.photo-grid`:
    * `display: grid`: Enables the grid layout.
    * `grid-template-columns: repeat(2, 1fr)`: Creates two equal-width columns.
    * `gap: 16px`: Sets the spacing between grid items.
    * `width: 100%`: Makes the grid take up the full width of its container.
    * `margin: 0 auto`: Centers the grid horizontally.
* `.photo-grid figure`, `.photo-grid .grid-video-wrapper`:
    * `overflow: hidden`: Hides content that overflows the container.
    * `border-radius: 8px`: Rounds the corners.
    * `background-color: #f9f9f9`: Sets a light gray background.
    * `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15)`: Adds a subtle shadow.
* `.photo-grid figure img`:
    * `width: 100%`: Makes the image fill its container width.
    * `height: auto`: Maintains the image's aspect ratio.
    * `display: block`: Prevents extra spacing below the image.
    * `border-radius: 8px 8px 0 0`: Rounds the top corners.
* `.photo-grid figcaption`:
    * `padding: 8px 12px`: Adds padding around the caption text.
    * `font-size: 0.9rem`: Sets the caption font size.
    * `color: #666`: Sets the caption text color.
    * `background-color: #fff`: Sets a white background for the caption.
    * `border-radius: 0 0 8px 8px`: Rounds the bottom corners of the caption.

### 2x1 Photo Grid (Image and Video)

**Example:**

<div class="photo-grid">
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3374.jpg" alt="Example image">
    <figcaption>Image in 2x1 grid</figcaption>
  </figure>
  <figure class="media-card grid-video-wrapper">
    <iframe src="https://www.youtube.com/embed/PmEsczIhK4I" frameborder="0" allowfullscreen></iframe>
    <figcaption>Video in 2x1 grid</figcaption>
  </figure>
</div>

**Usage:**

To create a 2x1 grid where one element is an image and the other is a video, wrap both elements within a `div` with the class `.photo-grid`. For the image, use a `<figure>` with the `.media-card` class. For the video, use a `<figure>` with both the `.media-card` and `.grid-video-wrapper` classes, and place your `<iframe>` directly inside the `<figure>`, followed by an optional `<figcaption>`. This ensures consistent styling and layout.

<details>
  <summary>See example code</summary>
  <div class="code-example">
    <pre><code class="language-html">
&lt;div class="photo-grid"&gt;
  &lt;figure class="media-card"&gt;
    &lt;img src="/assets/images/25_03/138A3374.jpg" alt="Example image"&gt;
    &lt;figcaption&gt;Image in 2x1 grid&lt;/figcaption&gt;
  &lt;/figure&gt;
  &lt;figure class="media-card grid-video-wrapper"&gt;
    &lt;iframe src="https://www.youtube.com/embed/PmEsczIhK4I" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;
    &lt;figcaption&gt;Video in 2x1 grid&lt;/figcaption&gt;
  &lt;/figure&gt;
&lt;/div&gt;
    </code></pre>
  </div>
</details>
<br>

**Key Attributes (CSS):**

* Refer to the `.photo-grid` and `.media-card` styles mentioned above.
* `.photo-grid .grid-video-wrapper`:
    * `position: relative`: For absolute positioning of the iframe.
    * `aspect-ratio: 3 / 2`: Sets a 3:2 aspect ratio for the video container.
* `.photo-grid .grid-video-wrapper iframe`:
    * `position: absolute`, `top: 0`, `left: 0`, `width: 100%`, `height: 100%`: Makes the iframe fill its container.
    * `border-radius: 8px 8px 0 0`: Rounds the top corners.

<hr>

### 3x Grid of Clickable Image Cards

**Example:**

<div class="photo-grid three-col">
  <a href="/assets/images/25_03/138A3229.jpg" target="_blank" class="image-card-clickable">
    <figure class="media-card">
      <img src="/assets/images/25_03/138A3229.jpg" alt="Example image 1">
      <figcaption>Click to enlarge 🔍</figcaption>
    </figure>
  </a>
  <a href="/assets/images/25_03/138A3293.jpg" target="_blank" class="image-card-clickable">
    <figure class="media-card">
      <img src="/assets/images/25_03/138A3293.jpg" alt="Example image 2">
      <figcaption>Click to enlarge 🔍</figcaption>
    </figure>
  </a>
  <a href="/assets/images/25_03/138A3374.jpg" target="_blank" class="image-card-clickable">
    <figure class="media-card">
      <img src="/assets/images/25_03/138A3374.jpg" alt="Example image 3">
      <figcaption>Click to enlarge 🔍</figcaption>
    </figure>
  </a>
</div>

**Usage:**

To create a 3-column clickable grid, use the `.photo-grid` class along with `.three-col` to create a 3-column layout. Wrap each `.media-card` in a link with the `.image-card-clickable` class.

<details>
  <summary>See example code</summary>
  <div class="code-example">
    <pre><code class="language-html">
&lt;div class="photo-grid three-col"&gt;
  &lt;a href="/assets/images/fullsize.jpg" target="_blank" class="image-card-clickable"&gt;
    &lt;figure class="media-card"&gt;
      &lt;img src="/assets/images/thumb.jpg" alt="Image"&gt;
      &lt;figcaption&gt;Click to enlarge 🔍&lt;/figcaption&gt;
    &lt;/figure&gt;
  &lt;/a&gt;
  &lt;!-- Repeat 2 more times --&gt;
&lt;/div&gt;
    </code></pre>
  </div>
</details>

---


### Lightbox Photo Grid

**Example:**

<div class="photo-grid three-col">
  <a href="/assets/images/25_03/138A3229.jpg" class="image-card-clickable glightbox" data-gallery="musandam">
    <figure class="media-card">
      <img src="/assets/images/25_03/138A3229.jpg" alt="Cove near Musandam">
      <figcaption>Cove near Musandam 🔍</figcaption>
    </figure>
  </a>
  <a href="/assets/images/25_03/138A3293.jpg" class="image-card-clickable glightbox" data-gallery="musandam">
    <figure class="media-card">
      <img src="/assets/images/25_03/138A3293.jpg" alt="Camp spot">
      <figcaption>Camp spot 🔍</figcaption>
    </figure>
  </a>
  <a href="/assets/images/25_03/138A3374.jpg" class="image-card-clickable glightbox" data-gallery="musandam">
    <figure class="media-card">
      <img src="/assets/images/25_03/138A3374.jpg" alt="Sunset view">
      <figcaption>Sunset view 🔍</figcaption>
    </figure>
  </a>
</div>

**Usage:**

Wrap each `.media-card` in an anchor (`<a>`) with:
- `href` pointing to the full-size image
- `class="glightbox"` to enable lightbox behaviour
- `data-gallery="name"` to group images into a gallery set

The lightbox will display full-size versions of the images with optional captions and support for swipe/arrow navigation. To use a 3-column layout, add the class `.three-col` to your `.photo-grid` container. You must also initialise the GLightbox plugin on the page for this to work.

<details>
  <summary>See example code</summary>
  <div class="code-example">
    <pre><code class="language-html">
&lt;div class="photo-grid three-col"&gt;
  &lt;a href="/assets/images/full1.jpg" class="image-card-clickable glightbox" data-gallery="trip"&gt;
    &lt;figure class="media-card"&gt;
      &lt;img src="/assets/images/thumb1.jpg" alt="Cove"&gt;
      &lt;figcaption&gt;Cove 🔍&lt;/figcaption&gt;
    &lt;/figure&gt;
  &lt;/a&gt;
  &lt;a href="/assets/images/full2.jpg" class="image-card-clickable glightbox" data-gallery="trip"&gt;
    &lt;figure class="media-card"&gt;
      &lt;img src="/assets/images/thumb2.jpg" alt="Camp spot"&gt;
      &lt;figcaption&gt;Camp spot 🔍&lt;/figcaption&gt;
    &lt;/figure&gt;
  &lt;/a&gt;
  &lt;a href="/assets/images/full3.jpg" class="image-card-clickable glightbox" data-gallery="trip"&gt;
    &lt;figure class="media-card"&gt;
      &lt;img src="/assets/images/thumb3.jpg" alt="Sunset view"&gt;
      &lt;figcaption&gt;Sunset view 🔍&lt;/figcaption&gt;
    &lt;/figure&gt;
  &lt;/a&gt;
  &lt;!-- Repeat as needed --&gt;
&lt;/div&gt;
    </code></pre>
  </div>
</details>

<hr>

## Tables

### Responsive Table

**Example:**

<div class="table-wrapper">
  <table class="responsive-table">
    <thead>
      <tr>
        <th>Event</th>
        <th>Starts</th>
        <th>Ends</th>
      </tr>
    </thead>
    <tbody>
      <tr data-label="Sunset">
        <td>Sunset</td>
        <td></td>
        <td>✓</td>
      </tr>
      <tr data-label="Civil Twilight">
        <td>Civil Twilight</td>
        <td>✓</td>
        <td>✓</td>
      </tr>
      <tr data-label="Nautical Twilight">
        <td>Nautical Twilight</td>
        <td>✓</td>
        <td>✓</td>
      </tr>
      <tr data-label="Astronomical Twilight">
        <td>Astronomical Twilight</td>
        <td>✓</td>
        <td>✓</td>
      </tr>
      <tr data-label="Start of Night">
        <td>Start of Night</td>
        <td>✓</td>
        <td></td>
      </tr>
      <tr data-label="End Shooting">
        <td>End Shooting</td>
        <td></td>
        <td>✓</td>
      </tr>
    </tbody>
  </table>
</div>

**Usage:**

To create a responsive table that adapts well to smaller screens, use the class `.responsive-table` on your `<table>` element. For the mobile view, it hides the traditional header and uses the `data-label` attribute on each `<tr>` to provide context for the stacked table cells. It's recommended to wrap the table in a `div` with the class `.table-wrapper` for potential overflow handling.

**Key Attributes (CSS):**

* `.responsive-table`:
    * `width: 100%`: Makes the table take up the full width of its container.
    * `border-collapse: collapse`: Collapses borders between table cells.
    * `margin-bottom: 1em`: Adds bottom margin to the table.
    * `font-size: 0.95em`: Sets the base font size for the table.
* `.responsive-table th`, `.responsive-table td`:
    * `border: 1px solid #ddd`: Adds borders to table headers and data cells.
    * `padding: 0.6em 0.8em`: Adds padding within table headers and data cells.
    * `text-align: left`: Aligns text to the left by default.
* `@media (max-width: 600px) .responsive-table`:
    * `thead { display: none; }`: Hides the table header on smaller screens.
    * `tr { display: block; margin-bottom: 1em; border: 1px solid #ddd; padding: 0.5em; }`: Displays table rows as blocks with spacing and borders.
    * `td { display: block; padding-left: 0.5em; border: none; border-bottom: 1px solid #eee; position: relative; text-align: left; }`: Displays table data cells as blocks with left padding, bottom borders, and relative positioning.
    * `td::before { content: attr(data-label); font-weight: bold; display: block; margin-bottom: 0.5em; color: #444; }`: Uses the `data-label` attribute to display the column header before the cell content on smaller screens.
    * `td[colspan]::before { content: attr(data-label); }`: Handles colspan attributes for the pseudo-header.

### Centered Ticks Table

**Example:**

<div class="table-wrapper">
  <table class="responsive-table centre-ticks">
    <thead>
      <tr>
        <th>Event</th>
        <th>Starts</th>
        <th>Ends</th>
      </tr>
    </thead>
    <tbody>
      <tr data-label="Sunset">
        <td>Sunset</td>
        <td></td>
        <td>✓</td>
      </tr>
      <tr data-label="Civil Twilight">
        <td>Civil Twilight</td>
        <td>✓</td>
        <td>✓</td>
      </tr>
    </tbody>
  </table>
</div>

**Usage:**

To center the content of the "Starts" and "Ends" columns (typically used for checkmarks or similar indicators), add the class `.centre-ticks` to your `.responsive-table`.

**Key Attributes (CSS):**

* `.centre-ticks th:nth-child(2)`, `.centre-ticks td:nth-child(2)`: Styles the second column (Starts).
* `.centre-ticks th:nth-child(3)`, `.centre-ticks td:nth-child(3)`: Styles the third column (Ends).
* `text-align: center`: Centers the text within these columns.

<hr>

## Post Navigation

### Previous/Next Links

**Example:**

<nav class="post_navi">
  <div class="post_navi-item nav_prev">
    <span class="post_navi-label">Previous</span>
    <a class="post_navi-link" href="#">Older Post</a>
    <span class="post_navi-arrow">←</span>
  </div>
  <div class="post_navi-item nav_next">
    <span class="post_navi-label">Next</span>
    <a class="post_navi-link" href="#">Newer Post</a>
    <span class="post_navi-arrow">→</span>
  </div>
</nav>
<br>
**Usage:**

To implement the styled previous and next post navigation links, use the following HTML structure. The `nav` element should have the class `.post_navi`. Each link is within a `div` with the class `.post_navi-item`, and you should use `.nav_prev` for the previous link and `.nav_next` for the next link. Include a `span` with the class `.post_navi-label` for the "Previous" or "Next" text, an `<a>` tag with the class `.post_navi-link` for the actual link text, and an optional `span` with the class `.post_navi-arrow` for the arrow icons.

**Key Attributes (CSS):**

* `.post_navi`:
    * `display: flex`: Creates a flex container for the items.
* `.post_navi-item`:
    * `padding: 0 2.2em`: Adds horizontal padding.
    * `width: 50%`: Makes each item take up half the width.
    * `position: relative`: For positioning the arrow.
    * `color: inherit !important`: Ensures the link color is inherited.
* `.nav_prev`:
    * `text-align: left`: Aligns the content to the left.
* `.nav_next`:
    * `text-align: right`: Aligns the content to the right.
* `.post_navi-label`:
    * `font-size: 0.8em`: Sets a smaller font size for the label.
    * `opacity: 0.5`: Makes the label slightly transparent.
* `.post_navi-arrow`:
    * `position: absolute`: Allows precise positioning.
    * `top: 50%`: Vertically centers the arrow.
    * `transform: translateY(-50%)`: Adjusts for the arrow's height.
    * `font-size: 2.5em`: Sets a large font size for the arrow.
    * `opacity: 0.3`: Makes the arrow semi-transparent.
* `.nav_prev .post_navi-arrow`:
    * `left: 0`: Positions the arrow to the left for the "Previous" link.
* `.nav_next .post_navi-arrow`:
    * `right: 0`: Positions the arrow to the right for the "Next" link.

<hr>

## Notes and Tips

> [!NOTE]
> This is a note.

**Usage:**

Use this block to display important notes or information. It is styled with a distinct visual cue to draw attention.

> [!TIP]
> This is a tip.

**Usage:**

Utilize this block to provide helpful tips or suggestions to the user. It features a different visual style to distinguish it from notes.

<hr>

## Typography

A guide to Sustainamo’s core type styles, font stacks, and usage.

### Font Families

| Label        | Sample                             | Class/Selector           | Font Stack                                                                 | Usage                                      |
|--------------|-------------------------------------|---------------------------|------------------------------------------------------------------------------|---------------------------------------------|
| Body Font    | The quick brown fox                | `body`, `p`, `ul`, `ol`  | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif` | Primary text for content and lists          |
| Headline Font| **The quick brown fox**            | `h1`, `h2`, `h3`, `h4`   | (inherits from body — same as above)                                       | Section headings and emphasis               |

---

### Heading Styles

| Sample                                                                 | Selector | Font Size | Weight | Color     |
|------------------------------------------------------------------------|----------|-----------|--------|-----------|
| <span style="font-size:1.8em; font-weight:600; color:#204312;">Heading 1</span> | `h1`     | 1.8em     | 600    | `#204312` |
| <span style="font-size:1.3em; font-weight:600; color:#204312;">Heading 2</span> | `h2`     | (inherits) | 600    | `#204312` |
| <span style="font-size:1.1em; font-weight:600; color:#204312;">Heading 3</span> | `h3`     | (inherits) | 600    | `#204312` |
| <span style="font-size:1em; font-weight:600; color:#204312;">Heading 4</span>   | `h4`     | (inherits) | 600    | `#204312` |

> Font size and weight values shown reflect the default applied in `override.css`. Most headings use a weight of 600 and colour `#204312`.

---

### Body Text & Lists

| Sample                                                  | Selector        | Line Height | Color   |
|----------------------------------------------------------|------------------|-------------|---------|
| The quick brown fox jumps over the lazy dog.            | `p`, `ul`, `ol` | 1.6         | `#222`  |

## Print Styles

**Example:**

*(No visual example, refers to print-specific styles)*

**Usage:**

Elements with the class `.no-print` will be hidden when the page is printed.

**Key Attributes (CSS):**

* `@media print .no-print`:
    * `display: none !important`: Hides elements with this class during printing.

<hr>

## Google Maps

**Example:**

HTML

## Google Maps

**Example:**

```html
<div class="map-container">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977976.174727654!2d53.41396897996718!3d23.611119477532732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e60f5ecce45370f%3A0x70a1de321e2fa852!2sMilky%20Way%20spot!5e0!3m2!1sen!2sae!4v1746701250616!5m2!1sen!2sae" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>

**Usage:**

To embed a responsive Google Map, wrap your <iframe> code provided by Google Maps within a div with the class .map-container.

**Key Attributes (CSS):**

* `.map-container`:
    * `position: relative`: Sets up the container for aspect ratio handling.
    * `padding-bottom: 56.25%`: Creates a 16:9 aspect ratio for responsiveness.
    * `height: 0`: Collapses the container's inherent height.
    * `overflow: hidden`: Hides iframe overflow.
    * `max-width: 100%`: Ensures it doesn't exceed its parent's width.
    * `background: #f9f9f9`: Sets a background color.
    * `border-radius: 8px`: Rounds the corners.
    * `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15)`: Adds a subtle shadow.
* `.map-container iframe`:
    * `position: absolute`: Allows the iframe to fill the container.
    * `top: 0`, `left: 0`: Positions the iframe at the top-left.
    * `width: 100%`: Makes the iframe take up the full width.
    * `height: 100%`: Makes the iframe take up the full height.
    * `border: 0`: Removes the default iframe border.

