"use client";

import { useEffect, useRef, useState } from "react";

import type {
  Equipment as EquipmentType,
  PaginationLinks,
  PaginationMeta,
} from "@/types/equipment";

import EquipmentModal from "./detail-modal/equipment-modal";
import EquipmentFilters from "./filters/equipment-filters";
import EquipmentGrid from "./equipment-grid/equipment-grid";
import EquipmentHero from "./hero/hero";
import EquipmentToolbar from "./toolbar/equipment-toolbar";

interface Props {
  equipments: EquipmentType[];
  meta: PaginationMeta;
  links: PaginationLinks;
  initialSearch: string;
  initialCategory: string;
}

export default function Equipment({
  equipments,
  meta,
  links,
  initialSearch,
  initialCategory,
}: Props) {
  /**
   * =========================================================
   * VIEW MODE
   * =========================================================
   */

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  /**
   * =========================================================
   * SELECTED EQUIPMENT
   * =========================================================
   */

  const [selectedEquipment, setSelectedEquipment] =
    useState<EquipmentType | null>(null);

  /**
   * =========================================================
   * SCROLL POSITION
   * =========================================================
   *
   * Menyimpan posisi scroll sebelum pagination /
   * navigation dilakukan.
   */

  const scrollPositionRef = useRef<number | null>(null);

  /**
   * =========================================================
   * SAVE SCROLL POSITION
   * =========================================================
   *
   * Menangkap klik pada link pagination sebelum browser
   * melakukan navigation.
   */

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) {
        return;
      }

      const link = target.closest(
        "a[data-equipment-pagination]",
      ) as HTMLAnchorElement | null;

      if (!link) {
        return;
      }

      scrollPositionRef.current = window.scrollY;
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  /**
   * =========================================================
   * RESTORE SCROLL POSITION
   * =========================================================
   *
   * Setelah halaman equipment berubah, kembalikan posisi
   * scroll ke posisi sebelum pagination diklik.
   */

  useEffect(() => {
    if (scrollPositionRef.current === null) {
      return;
    }

    const savedPosition = scrollPositionRef.current;

    /*
     * Beri kesempatan kepada Next.js untuk
     * menyelesaikan render halaman baru.
     */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: savedPosition,
          left: 0,
          behavior: "instant",
        });

        scrollPositionRef.current = null;
      });
    });
  }, [equipments, meta.current_page]);

  return (
    <>
      {/* =====================================================
          EQUIPMENT CONTENT
      ===================================================== */}

      <section
        className="
          bg-[#F8FAFC]
          py-16
          lg:py-24
        "
        style={{
          overflowAnchor: "none",
        }}
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-5
            lg:px-8
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[300px_1fr]
            "
          >
            {/* =================================================
                FILTER
            ================================================= */}

            <aside>
              <EquipmentFilters search={initialSearch} />
            </aside>

            {/* =================================================
                EQUIPMENT CONTENT
            ================================================= */}

            <div id="equipment-content" className="space-y-8">
              {/* =================================================
                  TOOLBAR
              ================================================= */}

              <EquipmentToolbar
                viewMode={viewMode}
                onViewChange={setViewMode}
              />

              {/* =================================================
                  EQUIPMENT GRID
              ================================================= */}

              <EquipmentGrid
                equipments={equipments}
                meta={meta}
                links={links}
                search={initialSearch}
                category={initialCategory}
                viewMode={viewMode}
                onSelectEquipment={setSelectedEquipment}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
          EQUIPMENT MODAL
      ======================================================= */}

      <EquipmentModal
        open={selectedEquipment !== null}
        equipment={selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
      />
    </>
  );
}
