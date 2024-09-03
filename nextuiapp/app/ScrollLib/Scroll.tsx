export class Scroll {
    private scrollable_element: HTMLElement;
    private scrollbar_element: HTMLElement;
    private max_scroll: number;
    private max_bar: number;
    private is_dragged: boolean = false;
    private startY: number;

    constructor(scrollable_element: HTMLElement) {
        this.max_scroll = 0;
        this.max_bar = 0;
        this.startY = 0;
        this.scrollable_element = scrollable_element;
        this.scrollbar_element = this.createScrollbar();
        this.attachEventHandlers();
        console.log("rrrr");
    }

    private createScrollbar(): HTMLElement {
        const newDiv = document.createElement('div');
        newDiv.className = 'scrollbar';
        newDiv.style.top = '0px';
        this.scrollable_element.appendChild(newDiv);
        return newDiv;
    }

    private attachEventHandlers(): void {
        this.scrollable_element.addEventListener('scroll', this.handleScroll.bind(this));
        this.scrollbar_element.addEventListener('mousedown', this.handleMouseDown.bind(this));
        window.addEventListener('mousemove', this.handleMouseMove.bind(this));
        window.addEventListener('mouseup', this.handleMouseUp.bind(this));
    }

    private handleScroll(): void {
        this.max_scroll = this.scrollable_element.scrollHeight - this.scrollable_element.clientHeight;
        this.max_bar = this.scrollable_element.clientHeight - this.scrollbar_element.clientHeight;
        let result = Math.floor(((this.scrollable_element.scrollTop - 0) * this.max_bar) / (this.max_scroll - 0));
        result = Math.max(0, Math.min(result, this.max_bar));
        this.scrollbar_element.style.top = result + "px";
    }

    private handleMouseDown(event: MouseEvent): void {
        this.is_dragged = true;
        this.startY = parseInt(this.scrollbar_element.style.top.replace('px', '')) - event.pageY;
        this.scrollable_element.classList.add("unselectable");
    }

    private handleMouseMove(event: MouseEvent): void {
        if (this.is_dragged) {
            const mouse_position = event.pageY + this.startY;
            const adjusted_position = Math.max(0, Math.min(mouse_position, this.max_bar));
            this.scrollbar_element.style.top = adjusted_position + "px";
            this.scrollable_element.scrollTop = Math.round(((adjusted_position - 0) * this.max_scroll) / (this.max_bar - 0));
            document.body.style.cursor = "grabbing";
        }
    }

    private handleMouseUp(): void {
        this.is_dragged = false;
        document.body.style.cursor = "auto";
        this.scrollbar_element.style.cursor = "grab";
        this.scrollable_element.classList.remove("unselectable");
    }

    destroy(): void {
        //this.scrollable_element.removeEventListener('scroll', this.handleScroll);
    }
}
