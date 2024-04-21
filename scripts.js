
const image_ID = document.getElementById("getImage1");
const floatingImageWrapper = document.querySelector(".floating-image-wrapper");

function ImageFunc1()
{
    const current_image_ID = parseInt(image_ID.getAttribute("date-image-id"));

    floatingImageWrapper.computedStyleMap.display = "flex"

    if (current_image_ID === 5)
    {
        image_ID.setAttribute("src", "OEM-MK2.jpg")
        image_ID.setAttribute("data-image-id", 0)
        return;
    }
}

function imageClick(ele, index)
{
    image_ID.setAttribute("src", ele.getAttribute("src"))
    image_ID.setAttribute("data-image-ID", index)
}

